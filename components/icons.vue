<template>
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
</template>

<script>
export default {

}
</script>

<style scoped>
.icons a {
  @apply  transition-colors duration-500;
}
</style>