<?php

use App\Models\Coupon;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebhookController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', "app"); 
Route::view('/app', "app"); 
Route::post("/stripe/webhook", WebhookController::class);


require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');

