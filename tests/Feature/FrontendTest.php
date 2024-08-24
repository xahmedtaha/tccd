<?php

namespace Tests\Feature;

use App\Models\Event;
use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class FrontendTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_access_home_page()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_can_access_blog()
    {
        $response = $this->get('/blog');

        $response->assertStatus(200);
    }

    public function test_can_access_about()
    {
        $response = $this->get('/about');

        $response->assertStatus(200);
    }

    public function test_can_see_post_in_list()
    {
        $post = Post::factory()->create();

        $this->get(route('posts'))->assertSee($post->name);
    }

    public function test_can_see_post_page()
    {
        $post = Post::factory()->create();

        $this->get(route('post', ['post' => $post->slug]))->assertSee($post->name);
    }

    public function test_can_see_event_in_list()
    {
        $event = Event::factory()->create();

        $this->get(route('events'))->assertSee($event->name);
    }

    public function test_can_see_event_page()
    {
        $event = Event::factory()->create();

        $this->get(route('event', ['event' => $event->id]))->assertSee($event->name);
    }
}
