<template>
<div class="flex flex-col px-16">
    <h2 class="font-extrabold text-5xl mb-18">Meetings</h2>

    <div v-for="meeting of meetings" :key="meeting.title" class="w-full  bg-slate-800 rounded-2xl py-6 px-8 mb-4 shadow-lg shadow-2xl">
        <h3 class="font-bold text-2xl mb-4">{{meeting.title}}</h3>
        <content-renderer  class="prose prose-invert text-white/80 prose-sm leading-tight max-w-none prose-red" :value="meeting"/>
    </div>
</div>
</template>

<script setup>
const { data: meetings } = await useAsyncData('meeting', () => queryContent('/meetings').sort({$numeric: true, _id:-1}).find())
</script>
