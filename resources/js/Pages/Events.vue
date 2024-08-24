<template>
    <Head title="Events" />
    <Navbar />
    <div class="relative isolate overflow-hidden py-24 sm:py-48">
        <div class="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 class="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900 text-center">Our Upcoming Events</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600 text-center">
                Stay in the loop with our latest happenings! Check out our upcoming events and be the first to join us for exciting workshops, meetups, and more. Don’t miss out on what’s next!
            </p>
            <div class="mx-auto mt-10 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 w-full">
                <EventCard :event="event" v-for="event in events" :key="event.id" />
            </div>
        </div>
    </div>
</template>
<script setup>
import Navbar from "@/Components/Navbar.vue";
import EventCard from "@/Components/EventCard.vue";
import {Head} from "@inertiajs/vue3";

defineProps({events: Object})
</script>
