<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'url',
        'description',
        'image',
        'user_id',
        'order',
        'price'
    ];

    public function testimonials()
    {
        return $this->hasMany(Testimonial::class);
    }
}
