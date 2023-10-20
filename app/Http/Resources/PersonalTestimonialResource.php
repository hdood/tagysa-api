<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class PersonalTestimonialResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "userName" => $this->user_name,
            "content" => $this->content,
            "rating" => $this->rating,
            "image" => Storage::disk("personal_testimonials")->url($this->image),
        ];
    }
}
