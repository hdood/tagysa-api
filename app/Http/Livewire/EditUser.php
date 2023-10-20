<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\User;

class EditUser extends Component
{

    public User $user; 

    protected $rules = [
        "user.name" => "required",
        "user.email" => "required",
        "user.full_name" => "required",
        "user.designation" => "sometimes",
        "user.bio" => "sometimes",
        "user.website" => "sometimes",
        "user.address" => "sometimes",
        "user.country_code" => "required_with:user.phone",
        "user.phone" => "required_with:user.country_code",
    ]; 

    public function render()
    {
        if(strlen($this->user->phone ) > 10) $this->user->phone  = substr($this->user->phone, 0, 10); 
        return view('livewire.edit-user')->extends("layouts.app");
    }


    public function save(){

        $this->validate(); 
        $this->user->save(); 
        session()->flash("message", "User updated successfully");
    }
}
