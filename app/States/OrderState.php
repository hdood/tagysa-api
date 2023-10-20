<?php

namespace App\States;

use Spatie\ModelStates\State;
use Spatie\ModelStates\StateConfig;

abstract class OrderState extends State
{
    abstract public function render();
    abstract public function renderAction();

    public static function config(): StateConfig
    {
        return parent::config()
            ->default(Unpaid::class)
            ->allowTransition(Paid::class, Preparing::class, PaidToPreparing::class)
            ->allowTransition(Preparing::class, Delivering::class, PreparingToDelivering::class)
            ->allowTransition(Paid::class, Cancelled::class, PaidToCancelled::class)
            ->allowTransition(Cancelled::class, Refunded::class, CancelledToRefunded::class);
    }
}
