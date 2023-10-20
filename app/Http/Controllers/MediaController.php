<?php

namespace App\Http\Controllers;

use App\Models\Media;
use App\Models\User;
use Database\Factories\MediaFactory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{



    public function index(User $user)
    {
        return Media::where('user_id', $user->id)->orderBy("order", "asc")->get();
    }

    public function storeEmbeddedMedia(Request $request)
    {
        $data = $request->validate([
            'type' => ['required'],
            'data' => ['required'],
            'user_id' => ['required'],
            'order' => 'required',
            'name' => 'required',
            'icon' => 'required'
        ]);
        try {
            Media::create($data);
            return response()->json('Media created successfully');
        } catch (\Throwable $th) {
            return response()->json(["error" => $th->getMessage()]);
        }
    }

    public function storeFileMedia(Request $request)
    {


        $data = $request->validate([
            'type' => 'required'
        ]);


        try {


            $media = MediaFactory::getFromType($data['type']);
            return $media->handle($request);
            // $path = Storage::disk("media")->put("", $request->file("media"));

            // $media = new Media();


            // $media->type = $data['type'];
            // $media->user_id = $data['user_id'];
            // $media->data = json_encode(["url" => url("/media") . "/" .  $path, "title" => $data['title']]);
            // $media->order = $data['order'];
            // $media->name = $data['name'];
            // $media->icon = $data['icon'];

            // $media->save();
            // return $media->data;
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function deleteFile(Media $media)
    {

        try {
            $data = (array) json_decode($media->data);

            $data = explode('/', $data['url']);
            $fileName  = end($data);


            if (!$fileName) {
                return $this->destroy($media);
            }

            // env('PUBLIC_PATH')
            unlink(public_path() . "/media/" . $fileName);

            $media->delete();

            return 'MEDIA DELETED SUCCESSFULLY';
        } catch (\Throwable $th) {
            return response()->json($th);
        }
    }




    public function reorder(Request $request)
    {

        try {
            $data = $request->validate([
                "media" => "required",
            ]);
            $media = (array) json_decode($data['media']);
            foreach ($media as $media) {
                Media::where('id', $media->id)->update(['order' => $media->order]);
            }

            return 'MEDIA REORDERED SUCCESSFULLY';
        } catch (\Throwable $th) {
            return $th;
        }
    }


    public function destroy(Media $media)
    {
        $media->delete();
        return 'MEDIA DELETED SUCCESSFULLY';
    }


    public function checkImagesCount()
    {
    }
}
