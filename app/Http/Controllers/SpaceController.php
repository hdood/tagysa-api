<?php

namespace App\Http\Controllers;

use App\Http\Resources\SpaceResource;
use App\Models\Space;
use App\Models\User;
use Illuminate\Http\Request;

class SpaceController extends Controller
{

    public function index()
    {
        return SpaceResource::collection(auth()->user()->spaces);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            "name" => "required"
        ]);
        try {
            $data["user_id"] = auth()->user()->id;
            Space::create($data);
            return response()->json("Space created successfully");
        } catch (\Throwable $th) {
            return response()->json($th, 500);
        }
    }

    public function attachUser(Space $space, User $user)
    {

        $visibility = $user->profile_visibility;

        try {
            if ($visibility === "public") {

                $space->users()->attach($user->id);
                return response()->json("user added successfully");
            }

            $defaultSpace = auth()->user()->spaces()->where("default", 1)->first();

            $defaultSpace->requests()->wherePivot();

            $space->users()->attach($user->id, ['status' => "pending"]);
            return response()->json("request sent successfully");
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }

    public function detachUser(Space $space, User $user)
    {
        try {
            $space->users()->detach($user->id);
            return response()->json("user deleted successfully");
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 500);
        }
    }
    public function update(Request $request, Space $space)
    {
        $data = $request->validate(["name" => "required"]);
        try {
            $existingSpace = auth()->user()->spaces()->where("name", $data["name"])->first();
            if ($existingSpace) {
                return response()->json(["error" => "space already exists"], 422);
            }
            $space->update(['name' => $data['name']]);
            return response()->json("space updated successfully");
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function destroy(Space $space)
    {
        try {
            $space->delete();
            return response()->json("space deleted successfully");
        } catch (\Throwable $th) {
            return response()->json("failed to delete space", 500);
        }
    }

    function acceptRequest(User $user)
    {
        $defaultSpace = $user->spaces()->where('default', 1)->first();

        $defaultSpace->requests()->updateExistingPivot($user->id, [
            'status' => "accepted",
        ]);

        $defaultSpace->users()->attach(auth()->user()->id);
        return response()->json("user accepted successfully");
    }
}
