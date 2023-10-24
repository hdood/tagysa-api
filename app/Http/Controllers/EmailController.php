<?php

namespace App\Http\Controllers;

use App\Models\Email;
use Illuminate\Http\Request;

class EmailController extends Controller
{

    public function index(){

        return auth()->user()->emails;
    }


    public function store(Request $request){

        $request->validate([
            "value" => "required|email"  
        ]);

        try {

            Email::create([
                "value" => $request->value, 
                "user_id" => auth()->user()->id
            ]);


            return response()->json("Email addedd successfully"); 
    
        } catch (\Throwable $th) {
            return $th;             
        }

    }

}
