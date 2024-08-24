<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    use HasFactory;

    protected $appends = ['is_published', 'published_date'];

    protected $with = ['category'];

    protected function casts(): array
    {
        return [
            'published_at' => 'datetime',
        ];
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(PostCategory::class, 'post_category_id');
    }

    protected function getPublishedDateAttribute()
    {
        return $this->published_at ?? $this->created_at;
    }

    protected function isPublished(): Attribute
    {
        return Attribute::make(
            get: fn($value, array $attributes) => $attributes['published_at'] < now(),
        );
    }

    public function scopePublished(Builder $query): Builder
    {
        return $query->whereNull('published_at')->orWhere('published_at', '<=', now());
    }
}
