<?php

namespace App\Http\Livewire;

use App\Contracts\Coupon as CouponContract;
use App\Models\User;
use App\Models\Coupon;
use Livewire\Component;

class EditCoupon extends Component
{
    public Coupon $coupon; 
    public $limited; 
    public $search = []; 
    public $specificUsers = []; 
    public $payload = [];
    public $errors = []; 

    protected $rules = [
        'coupon.is_specific_users' => 'required',
        "coupon.max_redeems" => 'sometimes',
    ];    
    protected $listeners = ["SaveUpdatedCoupon" => "save"];

    public function mount(Coupon $coupon){
        $this->coupon = $coupon; 
        $this->limited = $coupon->max_redeems == 0 ? false : true;
    }
    public function render()
    {

        $this->rules = array_merge($this->rules, $this->coupon->coupon->getRules()); 
        $searchResult = [];
        foreach ($this->search as $index => $term) {
            $searchResult[$index] = $term == '' ? []  : User::where("name", "LIKE", $term . "%")->get();
        }

        return view('livewire.edit-coupon', ["coupon" => $this->coupon, 'searchResult' => $searchResult]);

    }
    public function update(){

        $this->validate(); 

        $this->emit("updateRequested"); 
    }

    public function save(){
        if ( $this->limited && $this->coupon->max_redeems > $this->coupon->allowed_redeemers->count() ) {
            foreach ($this->specificUsers as $user) {
                $this->coupon->allowed_redeemers()->attach($user);
            }
        }
        $this->coupon->save();
        $this->coupon = Coupon::find($this->coupon->id); 
        session()->flash("message", "Coupon  updated successfully"); 
        $this->emitTo($this->coupon->coupon->renderEdit(), "updateRequested"); 
    }

    public function delete(){

        $this->coupon->coupon->delete(); 

        $this->coupon->delete(); 

        return redirect(route("admin.coupons"))->with("message", "coupon deleted successfully"); 
    }

    public function detachRedeemer($id){
        $this->coupon->allowed_redeemers()->detach($id); 

        $this->coupon->max_redeems =  $this->coupon->max_redeems - 1; 
        $this->coupon->save();
        $this->coupon = Coupon::find($this->coupon->id); 
    }
}
