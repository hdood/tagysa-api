<?php

namespace App\Http\Livewire;

use App\Models\Card;
use App\Models\User;
use Livewire\Component;
use Illuminate\Support\Collection;

class CreateCard extends Component
{

    public $term = "";
    public $selectedUser = "";
    public $name = "";


    function rules()
    {
        return [
            "name" => "required|min:5|unique:cards,name"
        ];
    }

    public function render()
    {
        $searchedUsers = new Collection([]);

        if ($this->term) {
            $searchedUsers = $this->userSearch($this->term);
        }

        return view('livewire.create-card', ['searchedUsers' => $searchedUsers]);
    }


    public function userSearch($term)
    {

        $query = User::query();

        $query = $query->where("name", "like", $this->term . "%");

        $query = $query->orWhere("email", "like", $this->term . "%");

        return $query->get();
    }

    public function selectUser($id)
    {
        $this->selectedUser  = $id;
    }


    public function save()
    {

        $this->validate();

        $card = new Card();

        $card->name = $this->name;

        $card->user_id = $this->selectedUser;

        $card->save();

        session()->flash("info", "Card Created Successfully");

        return redirect(request()->header('Referer'));
    }
}
