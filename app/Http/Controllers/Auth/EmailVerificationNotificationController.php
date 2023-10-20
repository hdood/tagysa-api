<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\EmailVerification;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;

class EmailVerificationNotificationController extends Controller
{
    /**
     * Send a new email verification notification.
     */
    public function store(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return response()->json(['status' => 'email verified']);
        }

        $user = request()->user();
        $id = $user->id;
        $signature = sha1($id);

        $url = URL::temporarySignedRoute(
            'verification.verify',  // The name of the route defined above
            now()->addMinutes(30), // Expiration time for the link (e.g., 24 hours from now)
            ['id' => $id, 'hash' => $signature]
        );

        try {

            // $request->user()->sendEmailVerificationNotification();

            Mail::to($request->user())->send(new EmailVerification($request->user(), env("FRONTEND_URL") . "/verify-email?id=$id&signature=$signature"));

            return response()->json(['status' => 'verification link sent']);
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
