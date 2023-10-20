<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Card;
use Livewire\WithPagination;

class Cards extends Component
{

    use WithPagination;
    public function render()
    {
        return view('livewire.cards', ['cards' => Card::paginate(10)])->extends("layouts.app");
    }


    function deleteCard($id){
        $card = Card::find($id); 

        $card->delete();

        session()->flash("info", "Card deleted successfully");
        return redirect(request()->header('Referer'));
    }
}
