<template>
  <div>
      工作台
      <button @click="goToDetails">details</button>
  </div>
</template>

<script>
export default {
    methods: {
      goToDetails(){
        this.$router.push({
          path: 'details',
          query: {
            id: 1
          }
        })
      }
    }
}
</script>

<style>

</style>