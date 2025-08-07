<!--|== Template =============================================================================== -->
<template>
  <div class="app">
    <SiteHeader />
    <main>
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  import SiteFooter from '@/components/SiteFooter.vue';
  import SiteHeader from '@/components/SiteHeader.vue';
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
  .app {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: auto !important;
    min-height: 100%;
  }
</style>
