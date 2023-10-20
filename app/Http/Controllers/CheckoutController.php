<?php

namespace App\Http\Controllers;

use Stripe\Stripe;
use App\Models\Order;
use App\Models\Coupon;
use Illuminate\Http\Request;
use Database\Factories\CardTypeFactory;
use Illuminate\Support\Facades\Storage;
use Stripe\Checkout\Session as StripeSession;

class CheckoutController extends Controller
{
    public function __invoke(Request $request)
    {

        $user = auth()->user();
        try {
            $data = $request->validate([
                "type" => "required",
                "payload" => "required",
                "address" => "required",
                "coupon" => "sometimes"
            ]);
            $card = CardTypeFactory::makeCard($data['type'], $data['payload']);

            $price = $card->getPrice();

            if ($request?->coupon) {
                $inheritedCoupon = Coupon::where("code", $request->coupon)->first()->coupon;
                $price = $inheritedCoupon->calc($price);
            }

            Stripe::setApiKey(env('STRIPE_SECRET'));
            $checkout_session = StripeSession::create([
                'line_items' => [[
                    'price_data' => [
                        'currency' => "inr",
                        'product_data' => [
                            'name' => 'card'
                        ],
                        'unit_amount' => $price * 100
                    ],
                    'quantity' => 1,
                ]],
                'mode' => 'payment',
                'success_url' => env('FRONTEND_URL') . '/checkout-success?session_id={CHECKOUT_SESSION_ID}',
                'cancel_url' => env('FRONTEND_URL') . '/admin',
                "customer" => $user->stripe_customer_id
            ]);

            $session_id =  $checkout_session->id;

            $order = Order::create([
                'user_id' => $user->id,
                'card' => json_encode($data),
                'price' => $card->getPrice(),
                "stripe_session_id" => $session_id,
                "address" => $data['address'],
                "coupon_code" => $request->coupon
            ]);

            return response()->json(["checkout_url" => $checkout_session->url]);
        } catch (\Throwable $th) {
            return $th;
        }
    }

    function getPrice(Request $request)
    {
        $data = $request->validate([
            "type" => "required",
            "payload" => "required",
            "coupon" => "sometimes"
        ]);

        try {
            $card = CardTypeFactory::makeCard($request->type, $request->payload);
            if ($request?->coupon) {

                $coupon = Coupon::where("code", $request->coupon)->first();

                if (!$coupon->canBeRedeemed(auth()->user())) return response()->json(["error" => "max redeemers exceeded"], 422);

                $inheritedCoupon = $coupon->coupon;

                return
                    response()->json(['price' => $inheritedCoupon->calc($card->getPrice())]);
            }

            return response()->json(['price' => $card->getPrice()]);
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
