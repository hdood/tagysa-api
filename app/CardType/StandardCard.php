<?php

namespace App\CardType;

use App\Contracts\CardType;
use Illuminate\Support\Facades\Blade;

class StandardCard extends BaseCard
{

    public $type = "standard";
    public function __construct(array $payload)
    {
        parent::__construct($payload);
        return $payload;
    }


    public function getPrice()
    {
        return $this->material == "plastic" ? 999 : 2499;
    }
    public  function render()
    {
        return view("cards.standard-card", ["card" => $this]);
    }
    public  function renderType()
    {
        return Blade::render('<div class="badge">Standard</div>');
    }
}
