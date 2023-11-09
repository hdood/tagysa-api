<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Google\Client;
use Illuminate\Http\RedirectResponse;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(Request $request): RedirectResponse
    {

        $data = $request->validate([
            "email" => ["required", "email"],
            "password" => "required",
        ]);

        if (!Auth::guard("admins")->attempt($data, true)) {
            return redirect(route("admin.login-form"))->with('error', "these credentials does not match our records");
        }
        $request->session()->regenerate();

        return redirect(route("admin.dashboard"));
    }



    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('admins')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect(route("admin.login-form"));
    }
}
