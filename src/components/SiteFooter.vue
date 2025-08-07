<!--|== Template =============================================================================== -->
<template>
  <footer class="footer">Copyright &copy; {{ useYear() }}</footer>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  import { useYear } from '@/composables/useYear';
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    color: $black;
    background-color: $white;
  }
</style>
