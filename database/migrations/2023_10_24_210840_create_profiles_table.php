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
        Schema::create('profiles', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->string('website')->nullable();
            $table->string('designation')->nullable();
            $table->string('full_name')->nullable();
            $table->string('address')->nullable();
            $table->string('phone')->nullable();
            $table->string('country_code')->nullable();
            $table->string('bio')->nullable();
            $table->string('image')->default('/user-placeholder.png');
            $table->text('portfolio')->nullable();
            $table->foreignUuid('card_id');

            $table->foreign('card_id')
                ->references('id')->on('cards')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
