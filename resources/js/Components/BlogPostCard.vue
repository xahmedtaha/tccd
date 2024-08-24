<template>
    <article class="flex w-full flex-col items-start justify-between">
        <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="post.published_date" class="text-gray-500">{{ new Date(post.published_date).toDateString() }}</time>
            <span v-if="post.category" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category.name }}</span>
        </div>
        <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <Link :href="route('post', {'post': post.slug})">
                    <span class="absolute inset-0" />
                    {{ post.name }}
                </Link>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 prose-sm" v-html="post.content"></p>
        </div>
    </article>
</template>

<script setup>
import {Link} from '@inertiajs/vue3'

defineProps({post: Object})
</script>
