<?php

namespace App\Http\Controllers;

use App\Http\Requests\SponsorRequest;
use App\Http\Resources\SponsorResource;
use App\Models\Sponsor;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class SponsorController extends Controller
{
    use AuthorizesRequests;

    public function index()
    {
        $this->authorize('viewAny', Sponsor::class);

        return SponsorResource::collection(Sponsor::all());
    }

    public function store(SponsorRequest $request)
    {
        $this->authorize('create', Sponsor::class);

        return new SponsorResource(Sponsor::create($request->validated()));
    }

    public function show(Sponsor $sponsor)
    {
        $this->authorize('view', $sponsor);

        return new SponsorResource($sponsor);
    }

    public function update(SponsorRequest $request, Sponsor $sponsor)
    {
        $this->authorize('update', $sponsor);

        $sponsor->update($request->validated());

        return new SponsorResource($sponsor);
    }

    public function destroy(Sponsor $sponsor)
    {
        $this->authorize('delete', $sponsor);

        $sponsor->delete();

        return response()->json();
    }
}
