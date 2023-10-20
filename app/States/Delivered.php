<?php


namespace App\States;

use Illuminate\Support\Facades\Blade;

class Delivered extends OrderState
{
    public static $name = 'delivered';


    public function render()
    {
        return Blade::render('<div class="bg-emerald-400 text-white text-center max-w-fit px-2 py-1 rounded-lg">Delivered</div>');
    }

    public function renderAction()
    {
        return view("card-actions.delivered", ['order' => $this->getModel()]);
    }
}
