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
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.app {
  flex: 1;
  height: auto !important;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
