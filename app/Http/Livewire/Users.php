<?php

namespace App\Http\Livewire;

use App\Models\User;
use Livewire\Component;
use Livewire\WithPagination;

class Users extends Component
{
    use WithPagination;

    public $term = ""; 
    public $userType = ""; 
    public $from = "";
    public $to = "";

    public function render()
    {

        $query = User::query()->orderBy("created_at", 'desc'); 


        if($this->term) {
            $query = $query->where("name", "like", trim($this->term) . "%"); 
            $query = $query->orWhere("email", "like", trim($this->term) . "%"); 
            $query = $query->orWhere("id","like", trim($this->term) . "%"); 
            $query = $query->orWhere("address","like", "%" . trim($this->term) . "%"); 
        }

        if($this->from) {

            $query = $query->where("created_at", ">", $this->from);
            $query = $query->where("created_at", "<=", $this->to ? $this->to : now()); 
        }

        if($this->userType){
            $this->userType == "premium" ? $query->premium() : $query->basic(); 
        }

        $users = $query->paginate(10); 
        
        return view('livewire.users', ["users" => $users])->extends("layouts.app");
    }

}
 