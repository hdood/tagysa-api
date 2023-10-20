<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     */
    public function __invoke(Request $request, $id, $signature)
    {

        try {
            //code...
            $user = request()->user();


            // Verify the signature against the user's ID
            if (!hash_equals((string) $signature, sha1($user->id))) {
                // Invalid signature, handle accordingly (e.g., show an error message)
                return response()->json("email verification failed");
            }

            // Update the email_verified_at column to the current timestamp
            $user->update(['email_verified_at' => now()]);

            // Redirect the user to a success page or any other appropriate action
            return response()->json("email verified successfully");
        } catch (\Throwable $th) {
            return  $th;
        }
        // Retrieve the user based on the provided ID
    }
}
