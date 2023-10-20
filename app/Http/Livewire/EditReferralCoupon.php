<?php

namespace App\Http\Livewire;

use App\Models\Coupon;
use Livewire\Component;
use App\Models\PercentageCoupon;
use App\Models\FixedAmountCoupon;
use App\Models\ReferralCoupon;

class EditReferralCoupon extends Component
{

    public $coupon; 
    
    protected $rules = [
        "coupon.earn_strategy" => "required",
        "coupon.earn_strategy_value" => "required"
    ];

    public $strategies = [
        "Fixed Amount" =>  FixedAmountCoupon::class,
        "Percentage" => PercentageCoupon::class,
    ];

    protected $validationAttributes = [
        'coupon.strategy_type' => 'strategy'
    ];

    protected $listeners = ["updateRequested" => "update", "SaveUpdatedCoupon" => "save"];

    public function render()
    {
        return view('livewire.edit-referral-coupon');
    }


    public function update(){

        $this->validate(); 
        
        $this->emitTo($this->coupon->strategy->renderEdit(), "updateRequested"); 
    }

    public function save(){
        
        $this->coupon->save();

        $this->emitUp("SaveUpdatedCoupon"); 

    }
}
