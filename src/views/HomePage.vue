<!--|== Template =============================================================================== -->
<template>
  <section class="home container">
    <div class="row">
      <div class="twelve columns">
        <img alt="Vue logo" src="@/assets/img/logo.png" />
      </div>
    </div>
    <div class="row">
      <div class="twelve columns">
        <p>{{ title }}</p>
      </div>
    </div>
    <div class="row">
      <div class="twelve columns">
        <HelloWorld />
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
const title = import.meta.env.VITE_APP_TITLE;
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.home {
  text-align: center;
}
</style>