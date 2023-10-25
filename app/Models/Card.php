<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Card extends Model
{

    use HasUuids;

    function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    function profile()  : HasOne {
        return $this->hasOne(Profile::class);
    }

    use HasFactory, HasUuids;
    
}
