<template>
  <div id="meetings" class="gap-12 flex flex-col">
    <h2 class="font-extrabold text-5xl mb-18">Meetings</h2>

    <div class="w-full  bg-slate-800 rounded-2xl py-6 px-8 shadow-lg shadow-2xl">
        <h3 class="font-bold text-2xl mb-4">{{latestMeeting.title}}</h3>
        
              <content-renderer  class="prose prose-invert text-white/80 prose-sm leading-tight max-w-none" :value="latestMeeting"/>
    </div>
    <div class="">
        <a href="/meetings" class="py-2 px-3 rounded-xl cursor-pointer font-bold text-lg bg-brand text-white float-right flex flex-row items-center gap-2">All Meetings <icon-right class="fill-current h-4 w-4" /></a>
  
    </div>
  </div>
</template>

<script setup>
const { data: latestMeeting } = await useAsyncData('meeting', () => queryContent('/meetings').sort({$numeric: true, _id:-1}).findOne())


</script>

<style>

</style>
