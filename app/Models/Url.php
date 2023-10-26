<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Url extends Model
{


    protected $fillable = [

        'name',
        'order',
        'link',
        'profile_id',
        
    ];

    use HasFactory;
}
