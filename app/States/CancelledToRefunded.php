<?php


namespace App\States;

use App\Models\Order;
use Spatie\ModelStates\Transition;
use Stripe\StripeClient;

class CancelledToRefunded extends Transition
{
    private Order $order;


    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    public function handle(): Order
    {
        $stripe = new StripeClient(env("STRIPE_SECRET"));
        $stripe->refunds->create(['payment_intent' => $this->order->payment_intent_id]);
        $this->order->state = Refunded::class;
        $this->order->save();
        return $this->order;
    }
}
