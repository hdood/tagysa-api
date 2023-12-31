<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CardController extends Controller
{
    

    function check(Request $request) {
        $request->validate([
            "id" => "required"
        ]);

        $card = Card::find($request->id);

        if(!$card) return response()->json(["error" => true, "message" => "card is not registered"]);

        return response()->json(["error" => false, "message" => "card exists"]);
    }


    function link(Request $request) {
        $request->validate([
            "id" => "required",
            'name' => "required",
        ]);

        $card = Card::find($request->id);

        if(!$card) return response()->json(["error" => true, "message" => "card is not registered"]);

        $card->user_id = Auth::guard('web')->user()->id;
        $card->name = $request->name;

        $card->save();

        return new UserResource(Auth::guard('web')->user());
    }

    function unlink(Request $request) {
        $request->validate([
            "id" => "required",
        ]);

        $card = Card::find($request->id);

        if(!$card) return response()->json(["error" => true, "message" => "card is not registered"]);

        $card->user_id = null;

        $card->save();
        return new UserResource(Auth::guard('web')->user());
    }

    function update(Card $card, Request $request){

        $request->validate([
            'name' => 'required'
        ]); 

        $card->name = $request->name; 

        $card->save(); 

        return response()->json('Card Updated Succussfully');
    }
    
}
