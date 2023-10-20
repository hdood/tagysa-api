<?php

namespace App\Models;

use App\States\OrderState;
use Spatie\ModelStates\HasStates;
use Database\Factories\CardTypeFactory;
use Illuminate\Database\Eloquent\Model;
use MichaelRubel\Couponables\Models\Coupon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory, HasStates;

    protected $fillable = [
        "user_id",
        "price",
        "status",
        "stripe_session_id",
        "card",
        "address",
        "coupon_code"
    ];

    protected $casts = [
        'state' => OrderState::class,
    ];

    protected function card(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                $_card =  json_decode($value);
                $card = CardTypeFactory::makeCard($_card->type, $_card->payload);
                return $card;
            },
        );
    }

    public function formattedAddress(): string
    {
        $address = json_decode($this->address);
        return $address->street . ", " . $address->city . ", " . $address->state . " " . $address->zip_code;
    }

    public function coupon()
    {
        return $this->belongsTo(Coupon::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
