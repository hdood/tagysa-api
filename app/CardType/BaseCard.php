<?php

namespace App\CardType;

use App\Contracts\CardType;

abstract class BaseCard implements CardType
{

    public $material;
    public $type = "base";


    public function __construct(array $payload)
    {
        if (is_string($payload)) $payload = json_decode($payload, true);

        $payload = (array) $payload;
        $this->material = $payload['material'];
    }
}
