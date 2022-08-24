<template>
  <nav class="px-20 py-6 flex flex-row gap-8 justify-between items-center font-semibold snap-start">
    <a href="/" class="flex flex-row gap-4 items-center text-2xl decoration-4"><img src="/gmc_logo.png" class="h-8 w-8" /> <span>Gunn Math Circle</span> </a> 
    <span class="grow"></span>
    <a href="/#meetings">Meetings</a> 
    <a href="/#competitions">Competitions</a> 
    <a href="/#officers">Officers</a>
    <icons/>
  </nav>
</template>

<script>

</script>

<style scoped>
a {
    @apply hover:underline hover:decoration-red-800 cursor-pointer decoration-4;
}

</style>