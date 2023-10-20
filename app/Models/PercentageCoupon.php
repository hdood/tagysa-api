<?php

namespace App\Models;

use App\Contracts\AdminCoupon;
use App\Contracts\Coupon;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PercentageCoupon extends Model implements Coupon, AdminCoupon
{

    public function handlePayload($payload)
    {
        $this->value = $payload['value'];
    }

    public function validate($payload){
        if(!isset($payload['value'])) return ["value" => "please enter a value"]; 
        if($payload["value"] > 100 || $payload['value'] <= 0) return ['value' => "value must be between 0 and 100"]; 
        return false;
    }
    public function redeemBy(User $redeemer, Order $order)
    {
        $this->coupon->redeemBy($redeemer, $order);
    }

    public function calc($price)
    {
        $discountPrice = ($this->value / 100) * $price;
        return $price - $discountPrice;
    }

    public function redeemer()
    {
        return $this->belongsTo(User::class);
    }

    public function coupon()
    {
        return $this->morphOne(Coupon::class, 'coupon');
    }

    public function renderInput() : View
    {
        return view("coupons.inputs.percentage");
    }

    public function renderEdit()
    {
        return "edit-percentage-coupon"; 
    }
    public function getFormattedValueAttribute()
    {
        return $this->value . "%";
    }

    public function getTypeAttribute()
    {
        return "Percentage Coupon";
    }

    function getRules()
    {
        return [
            "coupon.coupon.value" => "required", 
            "payload.value" => "required"
        ]; 
    }



    use HasFactory;
}
