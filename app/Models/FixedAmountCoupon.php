<?php

namespace App\Models;

use App\Models\Coupon;
use App\Contracts\AdminCoupon;
use Illuminate\Database\Eloquent\Model;
use App\Contracts\Coupon as CouponContract;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FixedAmountCoupon extends Model implements CouponContract, AdminCoupon
{

    function getRules()
    {
        return [
            "coupon.coupon.value" => "required", 
            "payload.value" => "required"
        ]; 
    }

    public function redeemBy(User $redeemer, Order $order)
    {
        $this->coupon->redeemBy($redeemer, $order);
    }
    public function handlePayload($payload)
    {
        $this->value = $payload['value'];
    }
    public function validate($payload){

        if(!isset($payload['value'])) return ["value" => "please enter a value"]; 
        return false;
    }
    public function calc($price)
    {
        return $price - $this->value;
    }
    public function redeemer()
    {
        return $this->belongsTo(User::class);
    }

    public function coupon()
    {
        return $this->morphOne(Coupon::class, 'coupon');
    }
    public function getFormattedValueAttribute()
    {
        return $this->value;
    }


    public function getTypeAttribute()
    {
        return "Fixed Amount";
    }

    public function renderInput() : View
    {
        return view("coupons.inputs.fixed");
    }

    public function renderEdit()
    {
        return "edit-fixed-amount-coupon"; 
    }


    use HasFactory;
}
