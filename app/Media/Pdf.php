<?php

namespace App\Media;

use App\Contracts\Media as MediaContract;
use App\Models\Media;
use Illuminate\Http\Request;

class Pdf extends MediaContract
{

    public function handle(Request $request)
    {
        $data = $request->validate([
            'media' => 'required|mimes:png,jpg,webp,jpeg,pdf,mp4,m4a',
            'user_id' => 'required',
            'data' => 'required',
            "type" => "required",
            'title' => "required",
            'order' => 'required',
            'name' => 'required',
            'icon' => 'required'
        ]);

        $count = Media::where(['type' => 'pdf'])->get()->count();
        $user = auth()->user();

        if ($user->inTrial || $user->is_premium || $count < 1) return $this->store($data, $request->file('media'));

        return response()->json(["error" => "maximum PDF documents count exceeded"], 422);
    }
}
