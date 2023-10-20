<?php


namespace App\States;

use Illuminate\Support\Facades\Blade;

class Cancelled extends OrderState
{
    public static $name = 'cancelled';


    public function render()
    {
        return Blade::render('<div class="bg-red-400 text-white text-center max-w-fit px-2 py-1 rounded-lg">Cancelled</div>');
    }

    public function renderAction()
    {
        return view("card-actions.cancelled", ['order' => $this->getModel()]);
    }
}
