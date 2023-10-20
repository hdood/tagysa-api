<?php


namespace App\Contracts;

use App\Models\User;
use Illuminate\Contracts\View\View;

interface AdminCoupon
{
    public function renderInput() : View;
    public function handlePayload($payload);
    public function renderEdit(); 
    public function validate($payload); 
    public function getRules(); 
}
