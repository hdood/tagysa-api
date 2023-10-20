<?php

namespace App\Http\Livewire;

use App\Models\Coupon;
use Livewire\Component;
use Livewire\WithPagination;


class Coupons extends Component
{
    use WithPagination;

    private $links;
    protected $listeners = [
        'CouponAdded' => 'refresh', 
        // "couponUpdated" => "refresh"
    ];
    public $ref = false;
    public $type = '';  
    public $code = ""; 

    protected $rules = [
        'coupons.*.is_enabled' => 'required',
    ];


    public function mount()
    {
    }
    public function refresh()
    {
        $this->ref = !$this->ref;
    }

    public function render()
    {

        $query = Coupon::query();

        $query = $query->orderBy("created_at", "desc"); 

        if($this->type)  $query = $query->where("coupon_type",  $this->type);

        if($this->code  != "") $query = $query->where("code", 'like' ,$this->code . "%");

        $coupons = $query->paginate(10); 

        return view('livewire.coupons', ["coupons" => $coupons])->extends("layouts.app");
    }

    function toggleEnable($id)
    {
        $coupon = Coupon::where('id', $id)->first();

        $coupon->enabled = !$coupon->enabled;
        $coupon->save();
        $this->refresh();
    }

    private function filterType($coupons){
        if($this->type == "all") return $coupons;
        array_map(fn ($coupon) => $coupon->coupon_type == $this->type ? $coupon : null, $coupons);
    }
}
