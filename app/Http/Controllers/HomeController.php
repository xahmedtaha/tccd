<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Post;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Welcome');
    }

    public function events()
    {
        return Inertia::render('Events', [
            'events' => Event::withCount(['sponsors', 'participants'])->get(),
        ]);
    }

    public function event(Event $event)
    {
        return Inertia::render('Event', [
            'event' => $event->load(['sponsors', 'participants']),
        ]);
    }

    public function posts()
    {
        return Inertia::render('Blog', [
            'posts' => Post::published()->get(),
        ]);
    }

    public function post(Post $post)
    {
        return Inertia::render('BlogPost', [
            'post' => $post,
        ]);
    }

    public function about()
    {
        return Inertia::render('About');
    }

}
