<?php

namespace Database\Factories;

use App\Models\Event;
use App\Models\EventResource;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class EventResourceFactory extends Factory
{
    protected $model = EventResource::class;

    public function definition(): array
    {
        return [
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
            'amount' => $this->faker->randomNumber(),
            'allocatable' => $this->faker->boolean(),

            'event_id' => Event::factory(),
        ];
    }
}
