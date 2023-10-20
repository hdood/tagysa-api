<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReferralCouponResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "code" => $this->coupon->code,
            "redeemers" => $this->coupon->redeemers->count(),
            "strategy" => $this->earn_strategy,
            "value" => $this->earn_strategy_value,
        ]; 
    }
}
