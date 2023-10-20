<?php

namespace App\States;

use Illuminate\Support\Facades\Blade;

class Preparing extends OrderState
{
    public static $name = 'preparing';

    public function render()
    {
        return Blade::render('<div class="badge badge-primary gap-2">preparing</div>');;
    }
    public function renderAction()
    {
        return view("card-actions.preparing");
    }
}
