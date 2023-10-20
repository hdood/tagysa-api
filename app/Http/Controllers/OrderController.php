<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\States\DeliveringToDelivered;
use App\States\PaidToCancelled;

class OrderController extends Controller
{
    public function index()
    {
        $orders = auth()->user()->orders()->orderBy("created_at", 'desc')->get();
        return OrderResource::collection($orders);
    }

    public function cancel(Order $order)
    {
        try {
            $order->state->transition(new PaidToCancelled($order));
            return 'order cancelled successfully';
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }

    function confirmReceiving(Order $order)
    {
        try {
            $order->state->transition(new DeliveringToDelivered($order));
            return 'order confirmed successfully';
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }
}
