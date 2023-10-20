<?php


namespace App\States;

use App\Models\Order;
use Spatie\ModelStates\Transition;

class DeliveringToDelivered extends Transition
{
    private Order $order;


    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    public function handle(): Order
    {
        $this->order->state = Delivered::class;
        $this->order->save();
        return $this->order;
    }
}
