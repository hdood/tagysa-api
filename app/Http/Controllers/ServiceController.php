<?php

namespace App\Http\Controllers;

use App\Http\Resources\ServiceResource;
use App\Models\Service;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ServiceController extends Controller
{


    public function index()
    {
        $user = auth()->user();
        $services = $user->services()->with('testimonials')
            ->orderBy('order')
            ->get();
        return  ServiceResource::collection($services);
    }


    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => 'required',
            'url' => 'nullable',
            'description' => 'sometimes',
            'image' => 'sometimes|mimes:png,jpg,jpeg,webp',
            'order' => 'required',
            'price' => 'required'
        ]);

        $data['user_id'] = auth()->user()->id;


        if ($request->file("image")) {
            $path = Storage::disk('services')->put("", request()->file('image'));
        }

        $data['image']  = $path;

        try {
            Service::create($data);
            return response()->json("Service created successfully");
        } catch (\Throwable $th) {
            return  response()->json(["error" => $th->getMessage()], 500);
        }
    }


    // *> update service
    public function update(Service $service, Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'url' => 'nullable',
            'description' => 'sometimes',
            'image' => 'sometimes|image',
            'price' => 'required'
        ]);

        if ($request->file("image")) {
            Storage::disk("services")->delete($service->image);
            $path = Storage::disk('services')->put("", request()->file('image'));
            $data['image']  = $path;
        }

        try {
            $service->update($data);
            return response()->json("Service updated successfully");
        } catch (\Throwable $th) {
            return  response()->json(["error" => $th->getMessage()], 500);
        }
    }

    public function destroy(Service $service)
    {
        try {
            Storage::disk("services")->delete($service->image);
            $service->delete();
            return response()->json('Service Deleted successfully');
        } catch (\Throwable $th) {
            return  response()->json(["error" => $th->getMessage()], 500);
        }
    }

    public function reorder(Request $request)
    {

        try {
            $data = $request->validate([
                "services" => "required",
            ]);
            $services = (array) json_decode($data['services']);

            foreach ($services as $service) {
                Service::where('id', $service->id)->update(['order' => $service->order]);
            }

            return 'SERVICES REORDERED SUCCESSFULLY';
        } catch (\Throwable $th) {
            return  response()->json(["error" => $th->getMessage()], 500);
        }
    }
}
