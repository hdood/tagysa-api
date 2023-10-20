<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Admin;
use App\Models\Order;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => "hdood",
            'email' => "mahdi@test.com",
            'email_verified_at' => now(),
            'address' => fake()->address(),
            'bio' => fake()->paragraph(),
            'phone' => fake()->e164PhoneNumber(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ]);

        Admin::create([
            'name' => "hdood",
            "email" => "mahdi@test.com",
            "password" => Hash::make("password"),
        ]);
    }
}
