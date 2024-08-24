<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostCategoryRequest;
use App\Http\Resources\PostCategoryResource;
use App\Models\PostCategory;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class PostCategoryController extends Controller
{
    use AuthorizesRequests;

    public function index()
    {
        $this->authorize('viewAny', PostCategory::class);

        return PostCategoryResource::collection(PostCategory::all());
    }

    public function store(PostCategoryRequest $request)
    {
        $this->authorize('create', PostCategory::class);

        return new PostCategoryResource(PostCategory::create($request->validated()));
    }

    public function show(PostCategory $postCategory)
    {
        $this->authorize('view', $postCategory);

        return new PostCategoryResource($postCategory);
    }

    public function update(PostCategoryRequest $request, PostCategory $postCategory)
    {
        $this->authorize('update', $postCategory);

        $postCategory->update($request->validated());

        return new PostCategoryResource($postCategory);
    }

    public function destroy(PostCategory $postCategory)
    {
        $this->authorize('delete', $postCategory);

        $postCategory->delete();

        return response()->json();
    }
}
