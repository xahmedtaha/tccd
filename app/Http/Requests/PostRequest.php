<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'content' => ['nullable'],
            'published_at' => ['nullable', 'date'],
            'slug' => ['required'],
            'post_category_id' => ['required', 'exists:post_categories,id'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
