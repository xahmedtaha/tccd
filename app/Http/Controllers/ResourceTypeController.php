<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResourceTypeRequest;
use App\Http\Resources\ResourceTypeResource;
use App\Models\ResourceType;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class ResourceTypeController extends Controller
{
    use AuthorizesRequests;

    public function index()
    {
        $this->authorize('viewAny', ResourceType::class);

        return ResourceTypeResource::collection(ResourceType::all());
    }

    public function store(ResourceTypeRequest $request)
    {
        $this->authorize('create', ResourceType::class);

        return new ResourceTypeResource(ResourceType::create($request->validated()));
    }

    public function show(ResourceType $resourceType)
    {
        $this->authorize('view', $resourceType);

        return new ResourceTypeResource($resourceType);
    }

    public function update(ResourceTypeRequest $request, ResourceType $resourceType)
    {
        $this->authorize('update', $resourceType);

        $resourceType->update($request->validated());

        return new ResourceTypeResource($resourceType);
    }

    public function destroy(ResourceType $resourceType)
    {
        $this->authorize('delete', $resourceType);

        $resourceType->delete();

        return response()->json();
    }
}
