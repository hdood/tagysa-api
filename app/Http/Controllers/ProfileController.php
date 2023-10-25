<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProfileResource;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    

    public function updatePicture(Request $request, Profile $profile){

        $request->validate(['image' => 'required|mimes:png,jpg,jpeg,svg,webp']);

        if($profile->image != "/user-placeholder.png"){
            Storage::disk("profile-pictures")->delete($profile->image);
        } 


        $path = Storage::disk("profile-pictures")->put("", $request->image);

        $profile->image = $path;

        $profile->save();

        return response()->json(["profile" => new ProfileResource($profile)]);

    }


    public function updateBio(Request $request, Profile $profile){
        
            $data = $request->validate([
    
                'name' => ['required', 'max:25'],
                'bio' => 'sometimes|max:300',
                'designation' => 'sometimes',
                
            ]);

            try {

                $profile->update($data);
    
                return response()->json('Profile DETAILS UPDATED', 200);

            } catch (\Exception $e) {

                return response()->json(['error' => $e->getMessage()], 400);

            }
    }



    public function updateContact(Request $request, Profile $profile)
    {
        $data = $request->validate([
            
            'phone' => 'sometimes',
            'address' => 'sometimes',
            'website' => 'sometimes',
            'country_code' => 'sometimes',
            'email' => $request->email ? "sometimes|email" : 'sometimes'

        ]);

        try {

            $profile->update($data);
            return response()->json('USER DETAILS UPDATED', 200);

        } catch (\Exception $e) {

            return response()->json(['error' => $e->getMessage()], 400);
            
        }
    }


}
