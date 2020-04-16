<template>
  <div id="app" class="myapp">
    <comp-a v-on:id-selected="getdate">

    </comp-a>
    <comp-b></comp-b>
  </div>
</template>

<script>
  export default {
    name: 'myapp',

  }
</script>

<style scoped>

</style>
