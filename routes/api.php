<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [AuthController::class, 'login']);

Route::apiResources([
    'events' => \App\Http\Controllers\EventController::class,
    'participants' => \App\Http\Controllers\ParticipantController::class,
    'resourceTypes' => \App\Http\Controllers\ResourceTypeController::class,
    'sponsors' => \App\Http\Controllers\SponsorController::class,
    'posts' => \App\Http\Controllers\PostController::class,
    'postCategories' => \App\Http\Controllers\PostCategoryController::class,
]);
