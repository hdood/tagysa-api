<?php


namespace App\States;

use Illuminate\Support\Facades\Blade;

class Unpaid extends OrderState
{
    public static $name = 'unpaid';


    public function render()
    {
        return Blade::render('<div class="bg-red-400 text-white text-center max-w-fit px-2 py-1 rounded-lg">Unpaid</div>');
    }
    public function renderAction()
    {
        return view("card-actions.unpaid", ["order" => $this->getModel()]);
    }
}
