<?php


namespace App\States;

use Illuminate\Support\Facades\Blade;

class Paid extends OrderState
{
    public static $name = 'paid';


    public function render()
    {
        return Blade::render('<div class="bg-green-400 text-white text-center max-w-fit px-2 py-1 rounded-lg">Paid</div>');
    }
    public function renderAction()
    {
        return view("card-actions.paid");
    }
}
