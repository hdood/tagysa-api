<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class DeleteAccountController extends Controller
{
    public function __invoke(Request $request)
    {
        $data = $request->validate([
            "password" => "required"
        ]);


        if (!Hash::check($request->password, auth()->user()->password)) {
            return response()->json(["error" => "wrong password"], 422);
        }

        auth()->user()->delete();

        Auth::guard('admins')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json("account deleted successfully");
    }
}
