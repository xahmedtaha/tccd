<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ParticipantRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'description' => ['nullable'],
            'event_id' => ['required', 'exists:events,id'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
