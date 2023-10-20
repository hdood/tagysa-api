<?php


namespace App\Contracts;

use App\Models\Media as ModelsMedia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

abstract class Media
{
    public abstract function handle(Request $request);


    public function store($data, $file)
    {
        try {
            $path = Storage::disk("media")->put("", $file);

            $media = new ModelsMedia();


            $media->type = $data['type'];
            $media->user_id = $data['user_id'];
            $media->data = json_encode(["url" => url("/media") . "/" .  $path, "title" => $data['title']]);
            $media->order = $data['order'];
            $media->name = $data['name'];
            $media->icon = $data['icon'];

            $media->save();
            return $media->data;
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
