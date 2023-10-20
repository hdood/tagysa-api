<?php

namespace App\CardType;

use App\Contracts\CardType;
use Illuminate\Support\Facades\Blade;

class PremiumCard extends BaseCard
{

    public $name;
    public $type = "premium";
    public $title;

    public function __construct(array $payload)
    {
        parent::__construct($payload);
        if(isset($payload['name']))  $this->name = $payload['name'];
        if(isset($payload['title']))  $this->title = $payload['title'];
        return $payload;
    }
    public function getPrice()
    {
        return $this->material == "plastic" ? 1499 : 2999;
    }
    public  function renderType()
    {
        return Blade::render('<div class="badge badge-primary">Infinite</div>');
    }

    public function render()
    {
        return view("cards.premium-card", ["card" => $this]);
    }
}
