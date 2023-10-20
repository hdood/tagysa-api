<?php

namespace App\Http\Controllers;

use App\States\Paid;
use App\Models\Order;
use App\Models\Coupon;
use Illuminate\Http\Request;

class WebhookController extends Controller
{



    public function __invoke(Request $request)
    {

        $endpoint_secret = env('STRIPE_WEBHOOK_SECRET');

        $payload = @file_get_contents('php://input');
        $event = null;


        try {
            $event = \Stripe\Event::constructFrom(
                json_decode($payload, true)
            );
        } catch (\UnexpectedValueException $e) {
            // Invalid payload
            echo '⚠️  Webhook error while parsing basic request.';
            http_response_code(400);
            exit();
        }
        if ($endpoint_secret) {
            // Only verify the event if there is an endpoint secret defined
            // Otherwise use the basic decoded event
            $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
            try {
                $event = \Stripe\Webhook::constructEvent(
                    $payload,
                    $sig_header,
                    $endpoint_secret
                );
            } catch (\Stripe\Exception\SignatureVerificationException $e) {
                // Invalid signature
                echo '⚠️  Webhook error while validating signature.';
                http_response_code(400);
                exit();
            }
        }

        // Handle the event
        switch ($event->type) {
            case 'checkout.session.completed':
                $session = $event->data->object; // contains a \Stripe\session
                $order = Order::where(["stripe_session_id" => $session->id])->first();

                if (!$order) return response("failed", 500);

                $order->payment_intent_id = $session->payment_intent;
                $order->state = Paid::class;
                $order->save();

                $user = $order->user;
                $user->plan_until = now()->addYears(config("app.basic_subscription_period"));
                $user->save();

                if ($order?->coupon_code) {
                    $coupon = Coupon::where("code", $order->coupon_code)->first();
                    $inheritedCoupon = $coupon->coupon;
                    try {
                        $inheritedCoupon->redeemBy($user, $order);
                    } catch (\Throwable $th) {
                        return response($th, 422);
                    }
                }
                break;
            default:
                error_log('Received unknown event type');
        }
    }
}
