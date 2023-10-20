<?php

namespace App\Models;

use Exception;
use App\Models\User;
use App\Models\Coupon;
use App\Contracts\AdminCoupon;
use Illuminate\Database\Eloquent\Model;
use App\Contracts\Coupon as CouponContract;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ReferralCoupon extends Model implements CouponContract, AdminCoupon
{

    public function redeemBy(User $redeemer, Order $order)
    {
        if (!$this->coupon->canBeRedeemed($redeemer)) {
            throw new Exception("this coupon can't be redeemed");
        }

        $this->referredUser->balance =  $this->referredUser->balance + $this->earning($order);
        $this->referredUser->save();  
        
        $this->coupon->redeemBy($redeemer, $order);
    }

    public function updatePayload($payload)
    {
        return array_merge(
            $payload,
            [
                'searchResult' =>
                isset($payload['search']) ?
                    ($payload['search'] == '' ? [] :
                        User::where("name", "like", $payload['search'] . "%")->get())
                    : []
            ]
        );
    }
    
    function getRules()
    {
        return [
            "coupon.coupon.value" => "required", 
            "payload.value" => "required"
        ]; 
    }


    public function calc($price)
    {
        return $this->strategy->calc($price);
    }

    public function initPayload($payload)
    {

        $coupons =  [
            "Fixed Amount" =>  FixedAmountCoupon::class,
            "Percentage" => PercentageCoupon::class,
        ];
        return
            array_merge([
                "coupons" => $coupons,
                "type" => "Fixed Amount",
                'search' => "",
                "earn_strategy" => "fixed"
            ], $payload);
    }
    public function redeemer()
    {
        return $this->belongsTo(User::class);
    }

    public function getFormattedValueAttribute()
    {
        return $this->strategy->formatted_value;
    }


    public function earning(Order $order){

        if($this->earning_strategy == "fixed") return $this->earn_strategy_value;

        return $order->price * ($this->earn_strategy_value / 100); 
    }

    public function strategy()
    {
        return $this->morphTo(__FUNCTION__, "strategy_type", "strategy_id");
    }

    public function getTypeAttribute()
    {
        return "Referral " . $this->strategy->type;
    }

    public function referredUser()
    {
        return $this->belongsTo(User::class, "user_id", 'id');
    }

    public function renderInput() : View
    {
        return view("coupons.inputs.referral", ["coupon" => $this]);
    }


    public function renderEdit()
    {
        return "edit-referral-coupon"; 
    }

    public function handlePayload($payload)
    {
        $strategy = new $payload["coupons"][$payload['type']];
        $strategy->handlePayload($payload);
        $strategy->save();

        $this->strategy_type = $strategy::class;
        $this->strategy_id = $strategy->id;
        $this->user_id = $payload['targetUser'];
        $this->earn_strategy = $payload['earn_strategy'];
        $this->earn_strategy_value = $payload['earn_strategy_value'];
    }
    public function validate($payload){

        $strategy = new $payload["coupons"][$payload['type']];


        $strategy_errors = $strategy->validate($payload); 

        if($strategy_errors) return $strategy_errors;
        
        if(!isset($payload['targetUser'])) return ["targetUser" => "please select a target user"]; 

        if(!isset($payload['earn_strategy_value'])) return ["value" => "please enter a value"]; 

        if($payload['earn_strategy'] != "percentage")  return false;

        if($payload['earn_strategy_value'] > 100 || $payload['earn_strategy_value'] <= 0) 
            return ['value' => "value must be between 0 and 100"]; 
    }

    public function coupon()
    {
        return $this->morphOne(Coupon::class, 'coupon');
    }
    use HasFactory;
}
