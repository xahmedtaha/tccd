<template>
    <Head title="Blog" />
    <Navbar />
    <div class="relative isolate overflow-hidden py-24 sm:py-48">
        <div class="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 class="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900 text-center">Our Blog</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600 text-center">
                Empowering Students with Career Tips, Success Stories, and Professional Growth Strategies
            </p>
            <div class="mx-auto mt-10 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 w-full">
                <BlogPostCard :post="post" v-for="post in posts" :key="post.id" />
            </div>
        </div>
    </div>
</template>
<script setup>
import Navbar from "@/Components/Navbar.vue";
import {Head} from "@inertiajs/vue3";
import BlogPostCard from "@/Components/BlogPostCard.vue";

defineProps({posts: Object})
</script>
