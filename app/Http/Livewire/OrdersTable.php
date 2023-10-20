<?php

namespace App\Http\Livewire;

use App\Models\Order;
use App\Models\User;
use Livewire\Component;
use Livewire\WithPagination;

class OrdersTable extends Component
{

    use WithPagination;

    public $type = ""; 
    public $perPage = 10; 
    public $name = ''; 

    public function mount()
    {

    }
    public function render()
    {

        $query = Order::query()->orderBy("orders.created_at", "desc"); 


        if($this->type) $query = $query->where("state", $this->type); 

        if($this->name){
                $ids = User::where("name", "like", $this->name . "%")->get()->pluck("id")->toArray();
                foreach ($ids as $id) {
                    $query = $query->orWhere("user_id", $id);  
                }
                $query = $query->orWhere('id', 'like', $this->name . '%'); 
        }

        $orders =  $query->paginate($this->perPage); 

        return view('livewire.orders-table', ['orders' => $orders]);
    }
}
