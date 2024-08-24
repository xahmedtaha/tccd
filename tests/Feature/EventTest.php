<?php

namespace Tests\Feature;

use App\Filament\Resources\EventResource;
use App\Models\Event;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Livewire\Livewire;
use Tests\TestCase;

class EventTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $superAdmin = User::factory()->create();

        Artisan::call('shield:super-admin', ['--user' => $superAdmin->id]);

        $this->actingAs($superAdmin);
    }

    public function test_can_access_event_list()
    {
        $response = $this->get(EventResource::getUrl('index'));
        $response->assertSuccessful();
        $response->assertSee('Events');
    }

    public function test_can_create_event()
    {
        $newData = Event::factory()->make();
        Livewire::test(EventResource\Pages\CreateEvent::class)
            ->fillForm($newData->toArray())
            ->call('create')
            ->assertHasNoFormErrors();

        $this->assertDatabaseHas(Event::class, $newData->only(['name', 'description']));
    }
}
