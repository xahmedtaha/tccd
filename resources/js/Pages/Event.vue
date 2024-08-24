<template>
    <Head :title="event.name" />
    <Navbar/>
    <div class="relative isolate overflow-hidden py-24 sm:py-48">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 class="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900">{{ event.name }}</h1>
            <div
                class="mx-auto grid grid-cols-1 lg:grid-cols-3 mt-8 pt-10 gap-y-16 border-t border-gray-200 lg:mt-16 lg:pt-16 lg:mx-0 w-full lg:gap-x-6">
                <section class="col-span-2 order-last lg:order-first">
                    <div class="prose lg:prose-lg" v-html="event.description"></div>
                </section>
                <section class="flex flex-col gap-y-8 col-span-1 w-full">
                    <div class="order-last lg:order-first shadow-sm border rounded-lg p-6" v-if="event.starts_at || event.address">
                        <dl>
                            <div v-if="event.starts_at" class="flex w-full flex-none gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only">Start Date</span>
                                    <CalendarIcon class="h-6 w-5 text-gray-400" aria-hidden="true"/>
                                </dt>
                                <dd class="text-sm font-medium leading-6 text-gray-900">
                                    {{ new Date(event.starts_at).toDateString() }}
                                </dd>
                            </div>
                            <div v-if="event.starts_at" class="mt-6 flex w-full flex-none gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only">Starts At</span>
                                    <ClockIcon class="h-6 w-5 text-gray-400" aria-hidden="true"/>
                                </dt>
                                <dd class="text-sm font-medium leading-6 text-gray-900">
                                    {{ new Date(event.starts_at).toTimeString() }}
                                </dd>
                            </div>
                            <div v-if="event.address" class="mt-6 flex w-full flex-none gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only">Address</span>
                                    <MapPinIcon class="h-6 w-5 text-gray-400" aria-hidden="true"/>
                                </dt>
                                <dd class="text-sm font-medium leading-6 text-gray-900">{{ event.address }}</dd>
                            </div>
                        </dl>
                    </div>
                    <div class="shadow-sm border rounded-lg p-6" v-if="event.sponsors?.length">
                        <h2 class="text-lg font-medium">Sponsors</h2>
                        <div class="flex flex-row flex-wrap gap-2 mt-3">
                            <span v-for="sponsor in event.sponsors" :key="sponsor.id"
                                  class="text-sm relative z-10 rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-700 hover:bg-gray-100">{{ sponsor.name }}</span>
                        </div>
                    </div>
                    <div class="shadow-sm border rounded-lg p-6" v-if="event.participants?.length">
                        <h2 class="text-lg font-medium">Participants</h2>
                        <div class="flex flex-row flex-wrap gap-2 mt-3">
                            <span v-for="participant in event.participants" :key="participant.id"
                                  class="text-sm relative z-10 rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-700 hover:bg-gray-100">{{ participant.name }}</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
import {CalendarIcon, MapPinIcon, ClockIcon} from "@heroicons/vue/24/outline";
import Navbar from "@/Components/Navbar.vue";
import {Head} from "@inertiajs/vue3";

defineProps({event: Object})
</script>
