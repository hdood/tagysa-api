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
            'phone' => $this->phone,
            'country_code' => $this->country_code,
            'email' => $this->email,
            'image' => strpos($this->image, "http") !== false ?  $this->image : url('/') . $this->image,
            'cover_image' => url('/') . $this->cover_image,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            "verified" => $request->user()->hasVerifiedEmail(),
            "views" => $this->visitors_count,
            'cards' => CardResource::collection($this->cards),
        ];
    }

    public function intWithStyle($n)
    {
        if ($n < 1000) return $n;
        $suffix = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
        $power = floor(log($n, 1000));
        return round($n / (1000 ** $power), 1, PHP_ROUND_HALF_EVEN) . $suffix[$power];
    }
}
    