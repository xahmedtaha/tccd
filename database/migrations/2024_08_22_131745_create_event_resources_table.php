<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('event_resources', function (Blueprint $table) {
            $table->id();
            $table->integer('amount')->nullable();
            $table->foreignId('event_id')->constrained('events')->cascadeOnDelete();
            $table->foreignId('resource_type_id')->constrained('resource_types')->cascadeOnDelete();
            $table->boolean('allocatable');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('event_resources');
    }
};
