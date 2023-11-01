<?php

use App\Models\Card;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\ProfileResource;
use App\Http\Controllers\CardController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\SpaceController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\VisitorController;
use App\Http\Controllers\Api\LinkController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\ContactSaverController;
use App\Http\Controllers\Api\UserImageController;
use App\Http\Controllers\UserCoverImageController;
use App\Http\Controllers\Auth\DeleteAccountController;
use App\Http\Controllers\Auth\ChangePasswordController;
use App\Http\Controllers\PersonalTestimonialController;
use App\Http\Controllers\UrlController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('users', [UserController::class, 'index']);

Route::middleware(['auth:sanctum', "verified"])->group(function () {

    // user routes
    Route::patch('users/profile-visibility', [UserController::class, 'toggleProfileVisibility']);
    Route::patch('users/{user}', [UserController::class, 'update']);
    Route::patch('users/contact/{user}', [UserController::class, 'updateContact']);
    Route::patch('users/visibility/{field}', [UserController::class, "toggleVisibility"]);
    Route::post('user-image', [UserImageController::class, 'store']);
    Route::post('user-cover-image', [UserCoverImageController::class, 'store']);
    Route::post('change-password', ChangePasswordController::class)->name('update-password');


    // Profile 
    Route::post('profile-picture/{profile}', [ProfileController::class, 'updatePicture']);
    Route::patch('profiles/{profile}', [ProfileController::class, 'updateBio']);
    Route::patch('profiles/contact/{profile}', [ProfileController::class, 'updateContact']);


    // theme route
    Route::get("user-theme/{theme}", [UserController::class, "updateTheme"]);


    // Social Icons routes
    Route::post("links/reorder", [LinkController::class, "reorder"]);
    Route::get('links/{profile}', [LinkController::class, 'index']);
    Route::post('links/{profile}', [LinkController::class, 'store']);
    Route::patch('links/{link}', [LinkController::class, 'update']);
    Route::delete('links/{link}', [LinkController::class, 'destroy']);

    // Urls routes
    Route::post("urls/reorder", [UrlController::class, "reorder"]);
    Route::get('urls/{profile}', [UrlController::class, 'index']);
    Route::post('urls/{profile}', [UrlController::class, 'store']);
    Route::patch('urls/{url}', [UrlController::class, 'update']);
    Route::delete('urls/{url}', [UrlController::class, 'destroy']);


    Route::post("account", DeleteAccountController::class);

    // media routes
    Route::post("media/embedded", [MediaController::class, "storeEmbeddedMedia"]);
    Route::post("media/file", [MediaController::class, "storeFileMedia"]);
    Route::get("media/{user}", [MediaController::class, "index"]);
    Route::delete("media/file/{media}", [MediaController::class, "deleteFile"]);
    Route::delete("media/{media}", [MediaController::class, "destroy"]);
    Route::post("media/reorder", [MediaController::class, "reorder"]);


    // service routes
    Route::get("services", [ServiceController::class, "index"]);
    Route::post("services", [ServiceController::class, "store"]);
    Route::delete("services/{service}", [ServiceController::class, "destroy"]);
    Route::post("services/edit/{service}", [ServiceController::class, "update"]);
    Route::post("services/reorder", [ServiceController::class, "reorder"]);

    // testimonials routes
    Route::post("testimonials", [TestimonialController::class, "store"]);
    Route::delete("testimonials/{testimonial}", [TestimonialController::class, "destroy"]);


    // personal testimonials
    Route::post("personal-testimonials", [PersonalTestimonialController::class, "store"]);
    Route::delete("personal-testimonials/{personalTestimonial}", [PersonalTestimonialController::class, "destroy"]);
    Route::get("personal-testimonials", [PersonalTestimonialController::class, "index"]);

    // space routes
    Route::apiResource("spaces", SpaceController::class);
    Route::post("spaces/attach/{space}/{user:name}", [SpaceController::class, "attachUser"])->withoutScopedBindings();
    Route::put("spaces/{space}", [SpaceController::class, "update"]);
    Route::post("spaces/detach/{space}/{user:name}", [SpaceController::class, "detachUser"])->withoutScopedBindings();

    // analytics
    Route::get("analytics/{profile}", [VisitorController::class, "show"]);

    // checkout
    Route::post("/checkout", CheckoutController::class);
    Route::post("/card/info", [CheckoutController::class, "getPrice"]);

    // order
    Route::get("orders", [OrderController::class, "index"]);
    Route::post("orders/cancel/{order}", [OrderController::class, "cancel"]);
    Route::post("orders/received/{order}", [OrderController::class, "confirmReceiving"]);


    // validate stripe session
    Route::get("stripe/session/{order:stripe_session_id}", fn (Order $order) => response()->json("valid session"));

    Route::post("/cards/check", [CardController::class, "check"]);
    Route::post("/cards/link", [CardController::class, "link"]);
});




Route::get("users/{name}",  [UserController::class, "show"]);
Route::get('users/check-name/{name}', [UserController::class, "checkName"]);
Route::post("contact-saver", [ContactSaverController::class, "store"]);

Route::post("visitor/{id}", [VisitorController::class, "store"]);

Route::get("states", fn () => response()->file(public_path("states.json")));

Route::get('users/search/{term}', [UserController::class, "searchByName"]);

Route::get("/{card}", fn(Card $card) => new ProfileResource($card->profile)); 

