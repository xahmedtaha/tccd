<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/events', [HomeController::class, 'events'])->name('events');
Route::get('/events/{event}', [HomeController::class, 'event'])->name('event');

Route::get('/blog', [HomeController::class, 'posts'])->name('posts');
Route::get('/blog/{post:slug}', [HomeController::class, 'post'])->name('post');

Route::get('/about', [HomeController::class, 'about'])->name('about');
