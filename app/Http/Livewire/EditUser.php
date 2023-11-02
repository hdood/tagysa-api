<?php

namespace App\Http\Livewire;

use App\Models\Card;
use Livewire\Component;
use App\Models\User;

class EditUser extends Component
{

    public User $user; 

    protected $rules = [
        "user.name" => "required",
        "user.email" => "required",
    ]; 

    public function render()
    {
        return view('livewire.edit-user')->extends("layouts.app");
    }


    public function save(){

        $this->validate(); 
        $this->user->save(); 
        session()->flash("message", "User updated successfully");
    }
    
}
