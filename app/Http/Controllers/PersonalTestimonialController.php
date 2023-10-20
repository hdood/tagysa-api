<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PersonalTestimonial;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\PersonalTestimonialResource;

class PersonalTestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            return PersonalTestimonialResource::collection(Auth::guard('web')->user()->personal_testimonials);

        } catch (\Throwable $th) {

            return $th;
            
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $data = $request->validate([
            "user_name" => "required",
            "content" => "required",
            "image" => "required|mimes:png,jpg,jpeg,webp",
            "rating" => "required"
        ]);
        try {
            $data['user_id'] = auth()->user()->id;
            if (!request()->file("image")) {
                return response()->json(["error" => "image is required"]);
            }
            $path = Storage::disk("personal_testimonials")->put('', request()->file("image"));
            $data['image'] = $path;
            PersonalTestimonial::create($data);

            return response()->json("Testimonial created successfully");
        } catch (\Throwable $th) {
            return response()->json($th, 500);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PersonalTestimonial $personalTestimonial)
    {

        try {
            Storage::disk('personal_testimonials')->delete($personalTestimonial->image);
            $personalTestimonial->delete();
        } catch (\Throwable $th) {
            return response()->json($th, 200);
        }

    }
}
