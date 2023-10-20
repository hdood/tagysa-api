<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class TestimonialResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [

            'userName' => $this->user_name,
            "content" => $this->content,
            "image" => Storage::disk("testimonials")->url($this->image),
            "id" => $this->id,
            "serviceId" => $this->service_id
        ];
    }
}
