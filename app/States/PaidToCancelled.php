<?php


namespace App\States;

use App\Models\Order;
use Spatie\ModelStates\Transition;
use Stripe\StripeClient;

class PaidToCancelled extends Transition
{
    private Order $order;


    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    public function handle(): Order
    {
        $this->order->state = Cancelled::class;
        $this->order->save();
        return $this->order;
    }
}
