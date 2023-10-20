<?php

namespace App\Http\Livewire;

use App\Models\Coupon;
use App\Models\FixedAmountCoupon;
use Livewire\Component;

class EditFixedAmountCoupon extends Component
{
    public $coupon; 
    
    protected $rules = [
        "coupon.value" => 'required|integer|min:0',
    ];

    protected $validationAttributes = [
        'coupon.value' => 'value'
    ];

    protected $listeners = ["updateRequested" => "update"];

    public function render()
    {
        return view('livewire.edit-fixed-amount-coupon');
    }

    public function update(){

        $this->validate(); 
        
        $this->coupon->save();

        $this->emitUp("SaveUpdatedCoupon"); 
    }
}
