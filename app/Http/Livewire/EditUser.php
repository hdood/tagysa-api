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


    public function save()
    {

        $this->validate();
        $this->user->save();
        session()->flash("message", "User updated successfully");
    }

    public function delete()
    {

        $this->user->delete();

        session()->flash("info", "User deleted succussfully.");
        return redirect()->route("admin.users");
    }


    function deleteCard($id)
    {
        $card = Card::find($id);

        $card->delete();

        session()->flash("info", "Card deleted successfully");
        return redirect(request()->header('Referer'));
    }

    function unlinkCard($id)
    {
        $card = Card::find($id);

        $card->user_id = null;

        $card->save();

        session()->flash("info", "Card unlinked successfully");
        return redirect(request()->header('Referer'));
    }
}
