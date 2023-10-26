<?php

namespace App\Http\Controllers;

use App\Models\Url;
use App\Models\Profile;
use Illuminate\Http\Request;

class UrlController extends Controller
{
    

    public function index(Profile $profile)
    {
        try {
            $urls = Url::where('profile_id', $profile->id)->orderBy('order', 'asc')->get();
            return response()->json($urls);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }


    public function reorder(Request $request)
    {

        try {
            $data = $request->validate([
                "urls" => "required",
            ]);
            $urls = (array) json_decode($data['urls']);
            foreach ($urls as $url) {
                Url::where('id', $url->id)->update(['order' => $url->order]);
            }
            
            return 'Urls REORDERED SUCCESSFULLY';

        } catch (\Throwable $th) {

            return $th;

        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Profile $profile)
    {
        $data = $request->validate([
            'name' => 'required|max:20',
            'link' => 'required|active_url',
            'order' => 'required',
        ]);


        try {
            $data['profile_id'] = $profile->id;
            Url::create($data);

            return response()->json('NEW Url CREATED', 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Url $link)
    {
        $request->validate([
            'name' => 'required|max:18',
            'url' => 'required',
        ]);

        try {
            $link->name = $request->input('name');
            $link->url = $request->input('url');
            $link->save();

            return response()->json('LINK DETAILS UPDATED', 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }




    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Url $url)
    {
        try {
            $url->delete();

            return response()->json('URl DELETEED', 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }




}
