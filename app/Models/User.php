<?php

namespace App\Models;

use App\Models\Card;
use App\Models\Email;
use App\Models\Coupon;
use Stripe\StripeClient;
use Laravel\Cashier\Billable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use MichaelRubel\Couponables\Traits\HasCoupons;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class User extends Authenticatable  implements MustVerifyEmail
{

    use HasApiTokens, HasFactory, Notifiable, Billable, HasUuids, HasCoupons;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'theme_id',
        'name',
        'image',
        'designation',
        'full_name',
        'cover_image',
        'bio',
        'email',
        'contact_email',
        'password',
        'address',
        'phone',
        'country_code',
        'website',
        'email_verified_at',
        'stripe_customer_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'trial_until' => 'datetime',
        'plan_until' => 'datetime',

    ];

    public function cards(){
        return $this->hasMany(Card::class);
    }


    public function links()
    {
        return $this->hasMany(Link::class);
    }

    public function emails() {
        return $this->hasMany(Email::class);
    }

    public function phones()
    {
        return $this->hasMany(Phone::class);
    }

    public function medias()
    {
        return $this->hasMany(Media::class);
    }

    public function services()
    {
        return $this->hasMany(Service::class);
    }

    public function personal_testimonials()
    {

        return $this->hasMany(PersonalTestimonial::class);
        
    }

    public function spaces()
    {
        return $this->hasMany(Space::class);
    }

    public function belong_spaces()
    {
        return $this->belongsToMany(Space::class);
    }

    public function contact_savers()
    {
        return $this->hasMany(ContactSaver::class);
    }
    public function visitors()
    {
        return $this->hasMany(Visitor::class);
    }
    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function requests()
    {
        return $this->belongsToMany(Space::class)->where('default', 1)->wherePivot("status", "pending");
    }

    public function getFreeTrialDaysLeftAttribute()
    {

        if ($this->is_premium) return 0;
        return now()->diffInDays($this->trial_until, false);
    }
    public function allowed_coupons()
    {
        return $this->belongsToMany(Coupon::class, "allowed_redeemers", "user_id", "coupon_id");
    }

    public function getInTrialAttribute()
    {

        if ($this->plan_until) return false;
        return now()->diffInDays($this->trial_until, false) > 0;
    }

    public function getIsPremiumAttribute()
    {
        return !!$this->plan_until && now()->diffInDays($this->plan_until, false) >= 0;
    }

    public function redeemedCoupons()
    {
        return $this->BelongsToMany(Coupon::class, "redeemed_coupons", 'user_id', "coupon_id");
    }
    public function referralCoupons(){
        return $this->hasMany(ReferralCoupon::class); 
    }

    public function scopePremium($query){
        $query->whereNotNull("plan_until")->where('plan_until', ">", now()); 
    }
    public function scopeBasic($query){
        $query->whereNull("plan_until");
    }

}
