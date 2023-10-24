<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\LinksCollection;
use App\Http\Resources\ProfileResource;
use App\Http\Resources\UserResource;
use App\Models\Link;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            if(auth()->user()){
                return response()->json(new UserResource(auth()->user()), 200);
            }
            return response()->json(["error" => "auth", "message" => "unauthenticated"],401);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function updateTheme(string $theme)
    {
        try {
            $user = auth()->user();
            $user->theme = $theme;
            $user->save();
            return response()->json('theme updated successfully');
        } catch (\Throwable $th) {
            return response()->json(["error" => $th], 500);
        }
    }

    public function  searchByName($term)
    {
        try {
            $users = User::where("name", "like", $term . "%")->get();
            return UserResource::collection($users);
        } catch (\Throwable $th) {

            return response()->json(["error" => $th]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $data = $request->validate([

            'name' => ['required', 'max:25', "unique:users,name,{$user->id}"],
            'bio' => 'sometimes|max:300',
            'designation' => 'sometimes',
            'full_name' => 'sometimes'
        ]);
        try {
            $user->update($data);

            return response()->json('USER DETAILS UPDATED', 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }


    public function toggleProfileVisibility()
    {
        $user = auth()->user();
        if ($user->profile_visibility == "public") {
            $user->profile_visibility = "private";
        } else {
            $user->profile_visibility = "public";
        }
        $user->save();
        return response()->json("profile visibility was set to " . $user->profile_visibility);
    }

    public function updateContact(Request $request, User $user)
    {
        $data = $request->validate([
            'phone' => 'sometimes',
            'address' => 'sometimes',
            'website' => 'sometimes',
            'country_code' => 'sometimes',
            'contact_email' => "sometimes|email|unique:users,email,{$user->id}"
        ]);

        try {

            $user->update($data);
            return response()->json('USER DETAILS UPDATED', 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function toggleVisibility($field)
    {
        $user =  auth()->user();
        $visibility = (array) json_decode($user->visibility);
        $visibility[$field] = !$visibility[$field];
        $user->visibility = $visibility;
        $user->save();
        return response()->json($visibility);
    }

    public function show($name)
    {
        try {
            $user = User::where("name", $name)->first();
            $links = Link::where('user_id', $user->id)->orderBy('order', 'asc')->get();
            return response()->json(new ProfileResource($user));
        } catch (\Exception $e) {
            return response()->json($e);
        }
    }

    public function checkName($name)
    {
        $user = User::where("name", $name)->first();
        if ($user) {
            return response()->json("false");
        }
        return response()->json("true");
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
