<template>
  <div>
    <h2 class="recepies">
      Простые белковые завтраки
    </h2>
    <BreakfastCards />
  </div>
</template>

<script>

import BreakfastCards from '@/components/BreakfastCards.vue'

export default {
  name: 'HomePage',
  components: { BreakfastCards },
};
</script>

<style>
.recepies{
  text-align: center;
}
</style>
