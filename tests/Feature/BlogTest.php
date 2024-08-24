<?php

namespace Tests\Feature;

use App\Filament\Resources\EventResource;
use App\Filament\Resources\PostResource;
use App\Models\Event;
use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Livewire\Livewire;
use Tests\TestCase;

class BlogTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $superAdmin = User::factory()->create();

        Artisan::call('shield:super-admin', ['--user' => $superAdmin->id]);

        $this->actingAs($superAdmin);
    }

    public function test_can_access_blog_posts()
    {
        $response = $this->get(PostResource::getUrl('index'));
        $response->assertSuccessful();
        $response->assertSee('Posts');
    }

    public function test_can_create_post()
    {
        $newData = Post::factory()->make();
        Livewire::test(PostResource\Pages\CreatePost::class)
            ->fillForm($newData->toArray())
            ->call('create')
            ->assertHasNoFormErrors();

        $this->assertDatabaseHas(Post::class, $newData->only(['slug', 'name', 'content']));
    }
}
