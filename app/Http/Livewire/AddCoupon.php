<?php

namespace App\Http\Livewire;

use App\Models\Coupon;
use Livewire\Component;
use App\Models\PercentageCoupon;
use App\Models\FixedAmountCoupon;
use App\Models\ReferralCoupon;
use App\Models\User;

class AddCoupon extends Component
{

    public Coupon $coupon;
    public $coupons = [];
    public $type = "Fixed Amount Coupon";
    public $payload = [];
    public $limit = false;
    public $specific = false;
    public $specificUsers = [];
    public $limitValue = 0;
    public $search = [];
    public $errors = []; 

    protected $rules = [
        'coupon.enabled' => 'required',
    ];

    public function mount()
    {

        $this->coupon = new Coupon();
        $this->coupon->enabled = 1;
        $this->coupons = [
            "Fixed Amount Coupon" =>  FixedAmountCoupon::class,
            "Percentage Coupon" => PercentageCoupon::class,
            "Referral Coupon" => ReferralCoupon::class,
        ];
    }

    public function render()
    {
        $searchedUsers = [];
        foreach ($this->search as $index => $term) {
            $searchedUsers[$index] = $term == '' ? [] : User::where("name", "LIKE", $term . "%")->get();
        }
        $coupon = new $this->coupons[$this->type];

        $this->payload = array_merge(
            $this->payload,
            [
                'searchResult' =>
                isset($this->payload['search']) ?
                    ($this->payload['search'] == '' ? [] :
                        User::where("name", "like", $this->payload['search'] . "%")->get())
                    : []
            ]
        );


        if (method_exists($coupon, "initPayload")) $this->payload = $coupon->initPayload($this->payload);
        if (method_exists($coupon, "updatePayload")) $this->payload = $coupon->updatePayload($this->payload);
        
        return view('livewire.add-coupon', ['searchedUsers' =>  $searchedUsers])->extends("layouts.app");
    }

    public function save()
    {

        $this->errors = [];
        $inheritedCoupon = new $this->coupons[$this->type];
        $this->errors = $inheritedCoupon->validate($this->payload); 
        if($this->errors) return; 
        
        if(count($this->specificUsers) != $this->limitValue) {
            $this->errors["specificUsers"] = "please select all users"; 
            return; 
        }

        $inheritedCoupon->handlePayload($this->payload);
        $inheritedCoupon->save();

        $this->coupon->code = $this->generateCode();
        $this->coupon->coupon_type = $inheritedCoupon::class;
        $this->coupon->coupon_id = $inheritedCoupon->id;
        $this->coupon->is_specific_users = $this->specific;
        if ($this->limit) {
            $this->coupon->max_redeems = $this->limitValue;
        }
        $this->coupon->save();

        if ($this->specific && $this->limitValue != 0 && $this->limit) {
            foreach ($this->specificUsers as $user) {
                $user = is_string($user) ? json_decode($user) : $user;
                $this->coupon->allowed_redeemers()->attach($user->id);
            }
        }


        return redirect(route("admin.coupons"))->with('message', 'Coupon Added!');
    }

    private function generateCode()
    {
        $chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $res = "";
        for ($i = 0; $i < 10; $i++) {
            $res .= $chars[mt_rand(0, strlen($chars) - 1)];
        }
        return $res;
    }
}
