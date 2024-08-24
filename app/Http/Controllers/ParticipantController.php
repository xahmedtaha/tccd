<?php

namespace App\Http\Controllers;

use App\Http\Requests\ParticipantRequest;
use App\Http\Resources\ParticipantResource;
use App\Models\Participant;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class ParticipantController extends Controller
{
    use AuthorizesRequests;

    public function index()
    {
        $this->authorize('viewAny', Participant::class);

        return ParticipantResource::collection(Participant::all());
    }

    public function store(ParticipantRequest $request)
    {
        $this->authorize('create', Participant::class);

        return new ParticipantResource(Participant::create($request->validated()));
    }

    public function show(Participant $participant)
    {
        $this->authorize('view', $participant);

        return new ParticipantResource($participant);
    }

    public function update(ParticipantRequest $request, Participant $participant)
    {
        $this->authorize('update', $participant);

        $participant->update($request->validated());

        return new ParticipantResource($participant);
    }

    public function destroy(Participant $participant)
    {
        $this->authorize('delete', $participant);

        $participant->delete();

        return response()->json();
    }
}
