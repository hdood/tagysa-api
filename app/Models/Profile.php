<?php

namespace App\Models;

use App\Models\Link;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Profile extends Model
{

    protected $fillable = [
        'name',
        'image',
        'designation',
        'bio',
        'email',
        'password',
        'address',
        'phone',
        'country_code',
        'website',
    ];

    public function links(){
        return $this->hasMany(Link::class);
    }

    public function card() {
        return $this->belongsTo(Card::class);
    }

    public function visitors()
    {
        return $this->hasMany(Visitor::class);
    }

    public function urls()
    {
        return $this->hasMany(Url::class);
    }

    use HasFactory, HasUuids;
}
