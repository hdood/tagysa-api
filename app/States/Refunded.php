<?php


namespace App\States;

use Illuminate\Support\Facades\Blade;

class Refunded extends OrderState
{
    public static $name = 'refunded';


    public function render()
    {
        return Blade::render('<div class="bg-orange-400 text-white text-center max-w-fit px-2 py-1 rounded-lg">Refunded</div>');
    }

    public function renderAction()
    {
        return "<div> This order was cancelled and refunded</div>";
    }
}
