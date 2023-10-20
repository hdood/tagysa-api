<?php

namespace App\Http\Livewire;

use App\Models\Coupon;
use Livewire\Component;

class EditPercentageCoupon extends Component
{


    public $coupon; 
    
    protected $rules = [
        "coupon.value" => 'required|integer|min:0|max:100',
    ];

    protected $validationAttributes = [
        'coupon.value' => 'value'
    ];

    protected $listeners = ["updateRequested" => "update"];

    public function render()
    {
        return view('livewire.edit-percentage-coupon');
    }

    public function update(){

        $this->validate(); 
        
        $this->coupon->save();

        $this->emitUp("SaveUpdatedCoupon"); 
    }
}
