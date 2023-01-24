<!--|== Template =============================================================================== -->
<template>
  <section class="error container">
    <div class="row">
      <div class="twelve columns">
        <h1>404</h1>
        <router-link class="button" :to="{ name: 'Home' }"
          >Back to the home page</router-link
        >
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup></script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.error {
}
</style>
