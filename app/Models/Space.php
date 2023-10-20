<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Space extends Model
{
    use HasFactory;
    protected $fillable = [
        "name",
        "user_id",
        "default"
    ];

    public function users()
    {
        return $this->belongsToMany(User::class)->wherePivot("status", "accepted");
    }

    public function requests()
    {
        return $this->belongsToMany(User::class)->wherePivot("status", "pending");
    }
}
