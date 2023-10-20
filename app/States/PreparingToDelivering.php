<?php


namespace App\States;

use App\Models\Order;
use Spatie\ModelStates\Transition;
use Stripe\StripeClient;

class PreparingToDelivering extends Transition
{
    private Order $order;


    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    public function handle(): Order
    {
        $this->order->state = Delivering::class;
        $this->order->save();
        return $this->order;
    }
}
