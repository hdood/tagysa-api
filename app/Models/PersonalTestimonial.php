<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalTestimonial extends Model
{

    protected $fillable = [
        "user_name",
        "content",
        "image",
        "user_id",
        "rating"
    ];
    use HasFactory;
}
