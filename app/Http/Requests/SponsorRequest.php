<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SponsorRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'description' => ['nullable'],
            'logo_path' => ['nullable'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
