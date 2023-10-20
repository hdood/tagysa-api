<?php

namespace App\Http\Livewire;

use App\Models\Card;
use App\Models\User;
use Livewire\Component;
use Illuminate\Support\Collection;

class EditCard extends Component
{

    public Card $card; 
    public $term = "";
    public $oldUser; 


    function rules(){

        return [ 
            "card.name" => "required|min:5,unique:cards,name" . $this->card->name,
            "card.user_id" => "sometimes"
        ];
    }

    public function mount( Card $card){
        $this->card = $card;
        $this->oldUser = $card->user;
    }
    public function render()
    {

        $searchedUsers = new Collection([]);

        if ($this->term) {
            $searchedUsers = $this->userSearch($this->term);
        }

        return view('livewire.edit-card', ['searchedUsers' => $searchedUsers]);
    }

    public function userSearch($term)
    {

        $query = User::query();

        $query = $query->where("name", "like", $this->term . "%");

        $query = $query->orWhere("email", "like", $this->term . "%");

        return $query->get();

    }

    public function selectUser($id){
        $this->card->user_id = $id;
    }
    public function clearUser(){
        $this->card->user_id = null;

        $this->card->save();

        session()->flash("info", "User unlinked");

        return redirect(request()->header('Referer'));

    }

    public function updateCard(){

        $this->validate(); 

        $this->card->save();

        session()->flash("info", "Card Updated Successfully");
        return redirect(request()->header('Referer'));
    }
}
