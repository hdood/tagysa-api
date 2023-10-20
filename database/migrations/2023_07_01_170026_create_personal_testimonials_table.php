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
        Schema::create('personal_testimonials', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("user_name");
            $table->string("content");
            $table->integer("rating");
            $table->string("image");
            $table->foreignUuid("user_id")->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personal_testimonials');
    }
};
