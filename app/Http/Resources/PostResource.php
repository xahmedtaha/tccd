<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Post */
class PostResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'updated_at' => $this->updated_at,
            'id' => $this->id,
            'name' => $this->name,
            'content' => $this->content,
            'published_at' => $this->published_at ?? $this->created_at,
            'slug' => $this->slug,
            'category' => $this->whenLoaded('category'),
        ];
    }
}
