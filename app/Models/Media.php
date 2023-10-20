<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Media extends Model
{

    protected $table = 'user_media';
    protected $fillable = [
        'user_id',
        'type',
        'data',
        'order',
        'name',
        'icon'
    ];
    use HasFactory;
}
