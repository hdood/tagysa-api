<?php

namespace App\Http\Controllers;

use App\Models\ContactSaver;
use Illuminate\Http\Request;

class ContactSaverController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            "name" => "required",
            "email" => "required",
            "phone" => "sometimes",
            "user_id" => "required"
        ]);
        try {
            ContactSaver::create($data);
            return response()->json("contact saver saved successfully");
        } catch (\Throwable $th) {
            return response()->json("failed to save contact saver", 500);
        }
    }
}
