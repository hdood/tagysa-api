<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('theme')->default("light");
            $table->string('name');
            $table->string('website')->nullable();
            $table->string('designation')->nullable();
            $table->string('full_name')->nullable();
            $table->string('address')->nullable();
            $table->boolean('public')->default(1);
            $table->string('phone')->nullable();
            $table->string("cover_image")->default("/cover-placeholder.png");
            $table->string('country_code')->nullable();
            $table->string('profile_visibility')->default('public');
            $table->string('bio')->nullable();
            $table->string('image')->default('/user-placeholder.png');
            $table->text('portfolio')->nullable();
            $table->string('visibility')->default(json_encode(['phone' => true, 'email' => true, 'address' => true, 'website' => true]));
            $table->string('email')->unique();
            $table->string('layout')->default('default');
            $table->string("contact_email")->nullable(); 
            $table->unsignedBigInteger("facebook_id")->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
