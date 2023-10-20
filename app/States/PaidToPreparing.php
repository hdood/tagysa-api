<?php


namespace App\States;

use App\Models\Order;
use Spatie\ModelStates\Transition;

class PaidToPreparing extends Transition
{
    private Order $order;


    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    public function handle(): Order
    {

        $this->order->state = Preparing::class;
        $this->order->save();
        return $this->order;
    }
}
