<template>
  <div class="w-full bg-gray-800 flex flex-row py-4 px-8">
    <span>&copy; Gunn Math Circle {{year}}</span>
    <span class="ml-auto"> D I M</span>
  </div>
</template>

<script>
export default {
    computed: {
        year(){
            return (new Date).getFullYear()
        }
    }
}
</script>

<style>

</style>