<?php

namespace App\Http\Controllers;

use Stevebauman\Location\Facades\Location;


use App\Models\Visitor;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VisitorController extends Controller
{
    public function store(Request $request, $id)
    {
        $data = $request->validate([
            "device" => "sometimes"
        ]);

        $data['user_id'] = $id;

        $position = Location::get();

        $data['country'] = $position->countryName;
        $data['city'] = $position->cityName;

        try {
            Visitor::create($data);
        } catch (\Throwable $th) {
            return response()->json($th);
        }
    }

    public function show()
    {

        $user = auth()->user();

        $startOfWeek = Carbon::now()->startOfWeek();
        $startOfMonth = Carbon::now()->startOfMonth();
        $startOfYear = Carbon::now()->startOfYear();



        $countries = $user->visitors()
            ->select('country', DB::raw('COUNT(*) as count'))
            ->groupBy('country')
            ->orderBy('count', 'desc')
            ->get()
            ->pluck('count', 'country')
            ->toArray();

        $cities = $user->visitors()
            ->select('city', DB::raw('COUNT(*) as count'))
            ->groupBy('city')
            ->orderBy('count', 'desc')
            ->get()
            ->pluck('count', 'city')
            ->toArray();

        $counts = [
            "visits" => [
                ["period" => "last week", "count" => $user->visitors()->where('created_at', '>=', $startOfWeek)->count()],
                ["period" => "last month", "count" => $user->visitors()->where('created_at', '>=', $startOfMonth)->count()],
                ["period" => "last year", "count" => $user->visitors()->where('created_at', '>=', $startOfYear)->count()]
            ],
            "devices" => [

                ["name" => "android", "count" => [
                    "week" =>  $user->visitors()->where('created_at', '>=', $startOfWeek)->where('device', 'android')->count(),
                    "month" => $user->visitors()->where('created_at', '>=', $startOfMonth)->where('device', 'android')->count(),
                    "year" => $user->visitors()->where('created_at', '>=', $startOfYear)->where('device', 'android')->count(),
                ]],
                ["name" => "ios", "count" => [
                    "week" =>  $user->visitors()->where('created_at', '>=', $startOfWeek)->where('device', 'ios')->count(),
                    "month" => $user->visitors()->where('created_at', '>=', $startOfMonth)->where('device', 'ios')->count(),
                    "year" => $user->visitors()->where('created_at', '>=', $startOfYear)->where('device', 'ios')->count(),
                ]],
                ["name" => "laptop", "count" => [
                    "week" =>  $user->visitors()->where('created_at', '>=', $startOfWeek)->where('device', 'laptop')->count(),
                    "month" => $user->visitors()->where('created_at', '>=', $startOfMonth)->where('device', 'laptop')->count(),
                    "year" => $user->visitors()->where('created_at', '>=', $startOfYear)->where('device', 'laptop')->count(),
                ]],
                ["name" => "unknown", "count" => [
                    "week" =>  $user->visitors()->where('created_at', '>=', $startOfWeek)->where('device', 'unknown')->count(),
                    "month" => $user->visitors()->where('created_at', '>=', $startOfMonth)->where('device', 'unknown')->count(),
                    "year" => $user->visitors()->where('created_at', '>=', $startOfYear)->where('device', 'unknown')->count(),
                ]]
            ],
            "countries" => $countries,
            "cities" => $cities,
            "contactSavers" =>  auth()->user()->contact_savers,
        ];

        return response()->json($counts);
    }
}
