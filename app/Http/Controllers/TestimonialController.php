<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TestimonialController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            "user_name" => "required",
            "content" => "required",
            "image" => "required|mimes:png,jpg,jpeg,webp",
            "service_id" => "required"
        ]);

        try {
            if (!request()->file("image")) {
                return response()->json(["error" => "image is required"]);
            }
            $path = Storage::disk("testimonials")->put('', request()->file("image"));
            $data['image'] = $path;
            Testimonial::create($data);
        } catch (\Throwable $th) {
            return response()->json($th, 500);
        }
    }

    public function destroy(Testimonial $testimonial)
    {
        try {
            Storage::disk('testimonials')->delete($testimonial->image);

            $testimonial->delete();
        } catch (\Throwable $th) {
            return response()->json($th, 500);
        }
    }
}
