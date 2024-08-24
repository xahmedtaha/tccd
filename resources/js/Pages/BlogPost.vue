<template>
    <Head :title="post.name" />
    <Navbar/>
    <div class="relative isolate overflow-hidden py-24 sm:py-48">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 class="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900">{{ post.name }}</h1>
            <div
                class="mx-auto grid grid-cols-1 lg:grid-cols-3 mt-8 pt-10 gap-y-16 border-t border-gray-200 lg:mt-16 lg:pt-16 lg:mx-0 w-full lg:gap-x-6">
                <section class="col-span-2 order-last lg:order-first">
                    <div class="prose lg:prose-lg" v-html="post.content"></div>
                </section>
                <section class="flex flex-col gap-y-8 col-span-1 w-full">
                    <div class="order-last lg:order-first shadow-sm border rounded-lg p-6" v-if="post.published_date || post.category">
                        <dl>
                            <div v-if="post.published_date" class="flex w-full flex-none gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only">Published At</span>
                                    <CalendarIcon class="h-6 w-5 text-gray-400" aria-hidden="true"/>
                                </dt>
                                <dd class="text-sm font-medium leading-6 text-gray-900">
                                    {{ new Date(post.published_date).toDateString() }}
                                </dd>
                            </div>
                            <div v-if="post.category" class="mt-6 flex w-full flex-none gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only">Category</span>
                                    <TagIcon class="h-6 w-5 text-gray-400" aria-hidden="true"/>
                                </dt>
                                <dd class="text-sm font-medium leading-6 text-gray-900">{{ post.category.name }}</dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
import {TagIcon, CalendarIcon} from "@heroicons/vue/24/outline";
import Navbar from "@/Components/Navbar.vue";
import {Head} from "@inertiajs/vue3";

defineProps({post: Object})
</script>
