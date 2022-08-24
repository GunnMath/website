<template>
  <div class="w-full bg-gray-800 flex flex-row py-4 px-8">
    <span>&copy; Gunn Math Circle {{year}}</span>
    <icons class="ml-auto" />
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