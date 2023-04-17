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
  width: 100%;
  height: 50px;
  background-color: $white;
  color: $black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
