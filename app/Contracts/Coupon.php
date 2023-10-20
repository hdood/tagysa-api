<?php


namespace App\Contracts;

use App\Models\Order;
use App\Models\User;

interface Coupon
{
    public function redeemBy(User $redeemer, Order $order);
    public function calc($price);
    public function getFormattedValueAttribute();
    public function getTypeAttribute();
}
