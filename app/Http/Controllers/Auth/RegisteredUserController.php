<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Google\Client;
use Stripe\StripeClient;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */

    public function store(Request $request)
    {

        $request->validate([
            'name' => ['required', 'string', 'max:255', 'unique:users'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'full_name' => ['required', 'string', 'max:255'],
        ]);

        try {


            $stripe = new StripeClient(env("STRIPE_SECRET"));
            $customer = $stripe->customers->create([
                'email' => $request->email,
            ]);

            $stripeAccount = $stripe->accounts->create([
                'type' => 'express',
                'country' => 'FR',
                'email' => $request->email,
                'capabilities' => [
                    'card_payments' => ['requested' => true],
                    'transfers' => ['requested' => true],
                ],
            ]);

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'full_name' => $request->full_name,
                'password' => Hash::make($request->password),
                'stripe_customer_id' => $customer->id,
                "stripe_account_id" => $stripeAccount->id
            ]);
      
            Auth::login($user);

            // event(new Registered($user));

            return response()->json("user created successfully");
        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }

    public function googleRegister(Request $request)
    {
        $data = $request->validate([
            "credential" => 'required',
            "client_id" => 'required'
        ]);
        $client = new Client(['client_id' => $data['client_id']]);
        $payload = $client->verifyIdToken($data['credential']);

        if (!$payload) {
            return response()->json(["error" => "wrong credentials"], 401);
        }

        $email = $payload['email'];

        $user = User::where('email', $email)->first();

        if ($user) {
            Auth::login($user);
            $request->session()->regenerate();
            return response()->json("successfully logged in");
        }


        $name  = str_replace(" ", '_', $payload['name']);

        $existing_user = User::where('name', $name)->first();


        $stripe = new StripeClient(env("STRIPE_SECRET"));
        $customer = $stripe->customers->create([
            'email' => $email,
        ]);

        $stripeAccount = $stripe->accounts->create([
            'type' => 'express',
            'country' => 'FR',
            'email' => $email,
            'capabilities' => [
                'card_payments' => ['requested' => true],
                'transfers' => ['requested' => true],
            ],
        ]);

        $image  = $payload['picture'];
        $user = new User();
        $user->name = $existing_user ?  $name . fake()->randomNumber(5, false) : $name;
        $user->full_name = $payload['name'];
        $user->email = $email;
        $user->image = $image;
        $user->password = Hash::make("hello world");
        $user->stripe_customer_id = $customer->id;
        $user->stripe_account_id = $stripeAccount->id;
        try {
            $user->save();

            Auth::login($user);
            return response()->json("successfully registered");
        } catch (\Throwable $th) {
            //throw $th;
            return $th;
        }

    }

}
