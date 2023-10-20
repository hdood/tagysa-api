<?php


namespace App\Contracts;



interface CardType
{
    public function __construct(array $payload);
    public function getPrice();
    public function render();
    public function renderType();
}
