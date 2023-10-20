<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactSaver extends Model
{

    protected $fillable = [
        "email",
        "name",
        "phone",
        "user_id"
    ];

    use HasFactory;
}
