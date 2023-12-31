<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Email extends Model
{

    protected $fillable = [
        "value", 
        "user_id"
    ]; 
    
    use HasFactory;
}
