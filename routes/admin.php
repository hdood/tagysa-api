<?php

use App\Models\User;
use App\Models\Order;
use App\Http\Livewire\Cards;
use App\Http\Livewire\Users;
use App\Http\Livewire\Coupons;
use App\Http\Livewire\EditUser;
use App\Http\Livewire\AddCoupon;
use App\Http\Livewire\Dashboard;
use App\Http\Livewire\EditCoupon;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Auth\NewPasswordController;
use App\Http\Controllers\Admin\Auth\RegisteredUserController;
use App\Http\Controllers\Admin\Auth\PasswordResetLinkController;
use App\Http\Controllers\Admin\Auth\AuthenticatedSessionController;

// Route::redirect("/", "/admin");

Route::prefix("admin")->group(function () {

    Route::middleware('auth:admins')->group(function () {


        // Dashboard
        Route::get("/", Dashboard::class)->name("admin.dashboard"); 

        // Orders
        Route::view("/orders", "admin.orders")->name("admin.orders");
        Route::get("/orders/edit/{order}", fn (Order $order) => view("admin.order-edit", ["order" => $order]))->name("admin.orders.edit");

        // users
        Route::get("/users", Users::class)->name("admin.users");
        Route::get("/users/edit/{user}",  EditUser::class)->name("admin.users.edit");
        
        // Coupons
        Route::get("/coupons", Coupons::class)->name("admin.coupons");
        Route::get("/coupons/edit/{coupon}", EditCoupon::class)->name("admin.coupons.edit");
        Route::get("/coupons/add", AddCoupon::class)->name("admin.coupons.add");

        // Cards
        Route::get("/cards", Cards::class)->name("admin.cards");

        // Logout
        Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
            ->name('admin.logout');
    });


    Route::view("/login", "admin.login")->name("admin.login-form");

    Route::post('/register', [RegisteredUserController::class, 'store'])
        ->middleware('guest')
        ->name('admin.register');


    Route::post('/login', [AuthenticatedSessionController::class, 'store'])
        ->name('admin.login');


    Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
        ->middleware('guest')
        ->name('admin.password.email');

    Route::post('/reset-password', [NewPasswordController::class, 'store'])
        ->middleware('guest')
        ->name('admin.password.store');
});
