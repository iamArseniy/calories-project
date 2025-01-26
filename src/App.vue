<template>
  <div id="app" class="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  name: 'App',
  components: {AppHeader,AppFooter,},
};
</script>
<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 98vh;
}

footer {
  margin-top: auto;
}

</style>
