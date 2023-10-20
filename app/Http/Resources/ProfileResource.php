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

        try {
            $visibility = (array) json_decode($this->visibility);
            $data =  [
                'id' => $this->id,
                'theme_id' => $this->theme_id,
                'name' => $this->name,
                'designation' => $this->designation,
                'full_name' => $this->full_name,
                'email' => $visibility['email'] ?  $this->email : false,
                'bio' => $this->bio,
                'phone' => $visibility['phone'] ?  $this->phone : false,
                'country_code' => $this->country_code,
                'address' => $visibility['address'] ?  $this->address : false,
                'website' => $visibility['website'] ?  $this->website : false,
                'phone_visibility' => $this->phone_visibility == 1 ? true : false,
                'image' => strpos($this->image, "http") !== false ?  $this->image : url('/') . $this->image,
                'cover_image' => url('/') . $this->cover_image,
                'portfolio' => !$this->portfolio  ? "" : url('/') . Storage::url($this->portfolio),
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at,
                'links' => new LinksCollection($this->links()->orderBy('order', 'asc')->get()),
                'services' => ServiceResource::collection($this->services()->orderBy('order', 'asc')->get()),
                'testimonials' => PersonalTestimonialResource::collection($this->personal_testimonials),
                'visibility' => json_decode($this->visibility),
                "media" => MediaResource::collection($this->medias()->orderBy('order', 'asc')->get()),
                'theme' => $this->theme,
                'layout' => $this->layout,
                'views' => $this->intWithStyle($this->visitors->count()),
                'contact_savers' => $this->intWithStyle($this->belong_spaces->count())
            ];
            return $data;
        } catch (\Throwable $th) {
            return [$th];
        }
    }

    public function intWithStyle($n)
    {
        if ($n < 1000) return $n;
        $suffix = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
        $power = floor(log($n, 1000));
        return round($n / (1000 ** $power), 1, PHP_ROUND_HALF_EVEN) . $suffix[$power];
    }
}
