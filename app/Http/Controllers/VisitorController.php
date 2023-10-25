<?php

namespace App\Http\Controllers;

use Carbon\Carbon;


use App\Models\Profile;
use App\Models\Visitor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Stevebauman\Location\Facades\Location;

class VisitorController extends Controller
{
    public function store(Request $request, $id)
    {

        $data = $request->validate([
            "device" => "sometimes"
        ]);

        $data['profile_id'] = $id;

        $position = Location::get();

        $data['country'] = $position->countryName;
        $data['city'] = $position->cityName;

        try {
            Visitor::create($data);
        } catch (\Throwable $th) {
            return response()->json($th);
        }
    }

    public function show(Profile $profile)
    {

        $startOfWeek = Carbon::now()->startOfWeek();
        $startOfMonth = Carbon::now()->startOfMonth();
        $startOfYear = Carbon::now()->startOfYear();

        $countries = $profile->visitors()
            ->select('country', DB::raw('COUNT(*) as count'))
            ->groupBy('country')
            ->orderBy('count', 'desc')
            ->get()
            ->pluck('count', 'country')
            ->toArray();

        $cities = $profile->visitors()
            ->select('city', DB::raw('COUNT(*) as count'))
            ->groupBy('city')
            ->orderBy('count', 'desc')
            ->get()
            ->pluck('count', 'city')
            ->toArray();

        $counts = [
            "visits" => [
                ["period" => "last week", "count" => $profile->visitors()->where('created_at', '>=', $startOfWeek)->count()],
                ["period" => "last month", "count" => $profile->visitors()->where('created_at', '>=', $startOfMonth)->count()],
                ["period" => "last year", "count" => $profile->visitors()->where('created_at', '>=', $startOfYear)->count()]
            ],
            "devices" => [

                ["name" => "android", "count" => [
                    "week" =>  $profile->visitors()->where('created_at', '>=', $startOfWeek)->where('device', 'android')->count(),
                    "month" => $profile->visitors()->where('created_at', '>=', $startOfMonth)->where('device', 'android')->count(),
                    "year" => $profile->visitors()->where('created_at', '>=', $startOfYear)->where('device', 'android')->count(),
                ]],
                ["name" => "ios", "count" => [
                    "week" =>  $profile->visitors()->where('created_at', '>=', $startOfWeek)->where('device', 'ios')->count(),
                    "month" => $profile->visitors()->where('created_at', '>=', $startOfMonth)->where('device', 'ios')->count(),
                    "year" => $profile->visitors()->where('created_at', '>=', $startOfYear)->where('device', 'ios')->count(),
                ]],
                ["name" => "laptop", "count" => [
                    "week" =>  $profile->visitors()->where('created_at', '>=', $startOfWeek)->where('device', 'laptop')->count(),
                    "month" => $profile->visitors()->where('created_at', '>=', $startOfMonth)->where('device', 'laptop')->count(),
                    "year" => $profile->visitors()->where('created_at', '>=', $startOfYear)->where('device', 'laptop')->count(),
                ]],
                ["name" => "unknown", "count" => [
                    "week" =>  $profile->visitors()->where('created_at', '>=', $startOfWeek)->where('device', 'unknown')->count(),
                    "month" => $profile->visitors()->where('created_at', '>=', $startOfMonth)->where('device', 'unknown')->count(),
                    "year" => $profile->visitors()->where('created_at', '>=', $startOfYear)->where('device', 'unknown')->count(),
                ]]
            ],
            "countries" => $countries,
            "cities" => $cities,
        ];

        return response()->json($counts);
    }
}
