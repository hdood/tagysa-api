<?php

namespace App\Http\Controllers;

use Stripe\Stripe;
use App\Models\Order;
use App\Models\Coupon;
use Illuminate\Http\Request;
use Database\Factories\CardTypeFactory;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Storage;
use Stripe\Checkout\Session as StripeSession;

class CheckoutController extends Controller
{
    public function __invoke(Request $request)
    {

        $user = auth()->user();
        try {
            $data = $request->validate([
                // "type" => "required",
                // "payload" => "required",
                // "address" => "required",
                // "coupon" => "sometimes"
            ]);
            // $card = CardTypeFactory::makeCard($data['type'], $data['payload']);

            $price = 12;

            if ($request?->coupon) {
                $inheritedCoupon = Coupon::where("code", $request->coupon)->first()->coupon;
                $price = $inheritedCoupon->calc($price);
            }

            $client = new Client();


            $order = Order::create([
                'user_id' => $user->id,
                'card' => json_encode($data),
                'price' => 12,
                "address" => "this is a test address",
                "coupon_code" => $request->coupon
            ]);

            $data = json_encode([
                'amount' => 1,
                'currency' => 'KWD',
                'customer_initiated' => true,
                'threeDSecure' => true,
                'save_card' => false,
                'description' => 'Test Order',
                'receipt' => [
                    'email' => true,
                    'sms' => true
                ],
                'customer' => [
                    'first_name' => auth()->user()->name,
                    'email' => auth()->user()->email,
                ],
                'source' => [
                    'id' => 'src_all'
                ],
                'redirect' => [
                    'url' => 'http://localhost:3000/products'
                ]
            ]);


            // $response = $client->request('POST', 'https://api.tap.company/v2/charges', [
            //     'body' => $data,
            //     'headers' => [
            //         'Authorization' => 'Bearer ' . env("TAP_SECRET_KEY"),
            //         'accept' => 'application/json',
            //         'content-type' => 'application/json',
            //     ],
            // ]);


            $curl = curl_init();

            curl_setopt_array($curl, [
                CURLOPT_URL => "https://api.tap.company/v2/charges",
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 30,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "POST",
                CURLOPT_POSTFIELDS => $data,
                CURLOPT_HTTPHEADER => [
                    "Authorization: Bearer sk_test_XKokBfNWv6FIYuTMg5sLPjhJ",
                    "accept: application/json",
                    "content-type: application/json"
                ],
            ]);

            $response = curl_exec($curl);
            $err = curl_error($curl);

            curl_close($curl);

            if ($err) {
                return "cURL Error #:" . $err;
            } else {
                return $response;
            }

        } catch (\Throwable $th) {
            return response()->json($th);
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
