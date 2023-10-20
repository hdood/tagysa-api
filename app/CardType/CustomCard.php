<?php

namespace App\CardType;

use Illuminate\Support\Facades\Blade;

class CustomCard extends BaseCard
{

    public $name;
    public $type = "custom";
    public $title;
    public $logo;

    public function __construct(array $payload)
    {
        parent::__construct($payload);

        if(isset($payload['name'])) $this->name = $payload['name'];
        
        if(isset($payload['title']))  $this->title = $payload['title'];

        if(isset($payload['logo'])) $this->logo = $payload['logo'];
        
        return $payload;
    }
    public function getPrice()
    {
        return $this->material == "plastic" ? 1999 : 3499;
    }
    public  function renderType()
    {
        return Blade::render('<div class="badge badge-accent">Custom</div>');
    }

    public function render()
    {
        return view("cards.custom-card", ["card" => $this]);
    }
}
