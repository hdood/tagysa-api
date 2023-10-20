<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Coupon extends Model
{
    use HasFactory;

    public function coupon()
    {
        return $this->morphTo(__FUNCTION__, 'coupon_type', 'coupon_id');
    }

    public function redeemers(): BelongsToMany
    {
        return $this->BelongsToMany(User::class, "redeemed_coupons", 'coupon_id', "user_id");
    }

    public function allowed_redeemers()
    {
        return $this->belongsToMany(User::class, "allowed_redeemers", "coupon_id", "user_id");
    }

    public function redeemBy(User $redeemer, Order $order)
    {
        if (!$this->max_redeems || $this->redeemers->count() < $this->max_redeems) {

            if (!$this->is_specific_users) {

                $this->redeemers()->attach($redeemer->id);
                return true;
            }
            $allowedRedeemer = $this->allowed_redeemers()->where("id", $redeemer->id)->first();

            if (!$allowedRedeemer) return false;

            $this->redeemers()->attach($redeemer->id);
            return true;
        }
        return false;
    }
    public function getRedeemersCountAttribute()
    {
        return  $this->max_redeems ? $this->redeemers->count() . " / " . $this->max_redeems : $this->redeemers->count() . ' / ∞';
    }

    public function canBeRedeemed(User $redeemer)
    {
        if (!$this->max_redeems) return true;

        if ($this->redeemers->count() >= $this->max_redeems) return false;

        if (!$this->is_specific_users) return true;

        $allowedRedeemer = $this->allowed_redeemers()->where("users.id", $redeemer->id)->first();

        if (!$allowedRedeemer) return false;
        return true;
    }
}
