<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ServiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' =>  $this->id,
            'name' => $this->name,
            'url' => $this->url,
            'image' => Storage::disk('services')->url($this->image),
            'description' => $this->description,
            "testimonials" => TestimonialResource::collection($this->testimonials),
            'price' => $this->price
        ];
    }
}
