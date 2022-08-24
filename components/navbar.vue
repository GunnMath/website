<template>
  <nav class="px-20 py-6 flex flex-row gap-8 justify-between items-center font-semibold snap-start">
    <a href="/" class="flex flex-row gap-4 items-center text-2xl decoration-4"><img src="/gmc_logo.png" class="h-8 w-8" /> <span>Gunn Math Circle</span> </a> 
    <span class="grow"></span>
    <a href="/#meetings">Meetings</a> 
    <a href="/#competitions">Competitions</a> 
    <a href="/#officers">Officers</a>
    <div class="flex flex-row gap-4 icons">
      <a target="_blank" href="http://discord.gg/4HZtKwP">
        <icon-discord class="h-6 w-6 fill-current hover:text-[#5865F2]"/> 
      </a>
      <a target="_blank" href="https://www.instagram.com/gunnmathcircle/">
        <icon-insta class="fill-current h-6 w-6 hover:fill-[url(#MyGradient)]" /> 
      </a>
      <a target="_blank" href="https://forms.gle/chLR7nFbcNgH4Mhs8/">
        <icon-mail class="fill-current hover:text-red-600 w-6 h-6" />
      </a>
    </div>
  </nav>
</template>

<script>

</script>

<style scoped>
a {
    @apply hover:underline hover:decoration-red-800 cursor-pointer decoration-4;
}

.icons a {
  @apply  transition-colors duration-500;
}
</style>