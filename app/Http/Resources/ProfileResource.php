<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProfileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        return  [
            'id' => $this->id,
            'name' => $this->name,
            'designation' => $this->designation,
            'email' => $this->email,
            'contact_email' =>  $this->contact_email,
            'bio' => $this->bio,
            'phone' => $this->phone,
            'country_code' => $this->country_code,
            'address' =>  $this->address,
            'website' =>  $this->website,
            'image' => Storage::disk("profile-pictures")->url($this->image),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            "views" => $this->visitors()->count(),
            'links' => new LinksCollection($this->links()->orderBy('order', 'asc')->get()),
            'urls' => $this->urls
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
