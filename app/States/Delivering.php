<?php


namespace App\States;

use Illuminate\Support\Facades\Blade;

class Delivering extends OrderState
{
    public static $name = 'delivering';


    public function render()
    {
        return Blade::render('<div class="bg-blue-400 text-white text-center max-w-fit px-2 py-1 rounded-lg">Delivering</div>');
    }

    public function renderAction()
    {
        return view("card-actions.delivering", ['order' => $this->getModel()]);
    }
}
