<template>
    <article class="flex w-full flex-col md:flex-row items-start gap-x-12 gap-y-4">
        <div class="rounded-lg bg-primary-500 text-white tracking-wide text-center flex md:flex-col gap-2 md:gap-4 items-center justify-center px-4 py-2 md:p-6">
            <h2 class="text-sm md:text-6xl font-semibold">{{ new Date(event.starts_at).getDate() }}</h2>
            <h3 class="text-sm md:text-xl">{{ months[new Date(event.starts_at).getMonth()] }}</h3>
        </div>
        <div class="flex flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
                <time :datetime="event.starts_at" class="text-gray-500">{{ new Date(event.starts_at).toDateString() }}</time>
                <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ event.sponsors_count }} Sponsors</span>
                <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ event.participants_count }} Participants</span>
            </div>
            <div class="group relative">
                <h3 class="mt-3 text-xl md:text-3xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link :href="route('event', {event: event.id})">
                        <span class="absolute inset-0" />
                        {{ event.name }}
                    </Link>
                </h3>
                <p class="mt-5 line-clamp-2 text-sm leading-6 text-gray-600 prose-sm" v-html="event.description"></p>
            </div>
            <!--                <div class="relative mt-8 flex items-center gap-x-4">-->
            <!--                    <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />-->
            <!--                    <div class="text-sm leading-6">-->
            <!--                        <p class="font-semibold text-gray-900">-->
            <!--                            <a :href="post.author.href">-->
            <!--                                <span class="absolute inset-0" />-->
            <!--                                {{ post.author.name }}-->
            <!--                            </a>-->
            <!--                        </p>-->
            <!--                        <p class="text-gray-600">{{ post.author.role }}</p>-->
            <!--                    </div>-->
            <!--                </div>-->
        </div>
    </article>
</template>

<script setup>
import {Link} from "@inertiajs/vue3";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

defineProps({
    event: Object
})
</script>
