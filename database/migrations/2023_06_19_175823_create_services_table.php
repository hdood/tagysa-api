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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid("user_id")->references('id')->on('users')->onDelete('cascade');
            $table->string("name");
            $table->text("description")->nullable();
            $table->integer("order");
            $table->string("price")->nullable();
            $table->string("url")->nullable();
            $table->string("image")->default("/service-placeholder.png");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
