<?php

namespace App\Http\Livewire;

use App\Models\Order;
use App\Models\User;
use App\Models\Visitor;
use Illuminate\Support\Facades\Cache;
use Livewire\Component;

class Dashboard extends Component
{


    
    
    public function render()
    {
        
        $totalUsers = User::all()->count(); 
        $lastTotalUsers = Cache::get("totalUsers", 0); 
        $usersGrowth = $totalUsers - $lastTotalUsers; 
        Cache::set("totalUsers", $totalUsers, 100000);
        
        
        $totalOrders = Order::all()->count(); 
        $lastTotalOrders = Cache::get("totalOrders", 0); 
        $ordersGrowth = $totalOrders - $lastTotalOrders; 
        Cache::set("totalOrders", $totalOrders, 100000); 

        
        
        return view('livewire.dashboard', 
            [
                "orders" => Order::orderBy("created_at", "desc")->limit(10)->get(), 
                "users" => User::orderBy("created_at", "desc")->limit(10)->get(), 
                "totalUsers" => $this->intWithStyle($totalUsers),
                "usersGrowth" => $usersGrowth, 
                "ordersGrowth" => $ordersGrowth, 
                "totalOrders" => $this->intWithStyle(Order::all()->count()),
                "totalVisits" => $this->intWithStyle(Visitor::where("created_at", '>', now()->subMonth())->count()),
                "totalAmount" => $this->intWithStyle(Order::where("created_at", '>', now()->subMonth())->sum("price")),
                "lastMonth" => now()->subMonth()->format('M jS'),
                "today" => now()->format('M jS')

            ]
        )->extends("layouts.app");
    }


    public function intWithStyle($n)
    {
        if ($n < 1000) return $n;
        $suffix = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
        $power = floor(log($n, 1000));
        return round($n / (1000 ** $power), 1, PHP_ROUND_HALF_EVEN) . $suffix[$power];
    }

}
