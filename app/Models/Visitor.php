<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{

    protected $fillable = [
        'country',
        'profile_id',
        'city',
        'continent',
        'device'
    ];
    use HasFactory;
}
