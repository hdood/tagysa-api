<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {


        $requests =  $this->requests->map(
            fn ($request) => DB::table('users')
                ->where(
                    [
                        "id" => $request->user_id
                    ]
                )
                ->first()
        );

        return [
            'id' => $this->id,
            'theme' => $this->theme,
            'name' => $this->name,
            'designation' => $this->designation,
            'full_name' => $this->full_name,
            'email' => $this->email,
            'contact_email' => $this->contact_email, 
            'bio' => $this->bio,
            'phone' => $this->phone,
            'country_code' => $this->country_code,
            'address' => $this->address,
            'website' => $this->website,
            'profile_visibility' => $this->profile_visibility,
            'image' => strpos($this->image, "http") !== false ?  $this->image : url('/') . $this->image,
            'cover_image' => url('/') . $this->cover_image,
            'portfolio' => !$this->portfolio  ? "" : url('/') . Storage::url($this->portfolio),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'visibility' => json_decode($this->visibility),
            'pivot' => $this->pivot  ? $this->pivot : null,
            'testimonials' => PersonalTestimonialResource::collection($this->personal_testimonials),
            'layout' => $this->layout,
            'trial' => $this->free_trial_days_left > 0,
            'trailLeftDays' => $this->free_trial_days_left,
            'isPremium' => $this->is_premium,
            "requests" => RequestResource::collection($requests),
            "balance" => $this->balance, 
            "referralCoupons" => ReferralCouponResource::collection($this->referralCoupons), 
            'cards' => CardResource::collection($this->cards),
        ];
    }
}
