<template>
  <div class="app">
    <div class="app__scrollBar">
      <clients-list/>
    </div>
    <div class="app__content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import ClientsList from '@/components/ClientsList.vue';

export default {
  components: { ClientsList }
}
</script>


<style>

html, body {
  margin: 0;
  padding: 0;
  background-color: ghostwhite;
  width: 100ww;
  height: 100vh;
}

.app {
  display:  flex;
  width: 100%;
  height: 100%;
}

.app__scrollBar {
  width: 30%;
  height: 100%;
}

.app__content {
  width: 70%;
  height: 100%;
}



</style>
