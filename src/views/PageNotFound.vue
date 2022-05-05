<!--|== Template =============================================================================== -->
<template>
  <section class="page-not-found">
    <h1>404</h1>
    <router-link class="button" :to="{ name: 'Home' }"
      >Back to the home page</router-link
    >
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>

export default {
  name: 'page-not-found-page',

  props: {},

  components: {
  },

  data() {
    return {
    };
  },

  beforeCreate() {},

  created() {},

  beforeMount() {},

  mounted() {},

  beforeUpdate() {},

  updated() {},

  beforeUnmount() {},

  unmounted() {},

  computed: {},

  methods: {},

  watch: {}
};
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.page-not-found {
}
</style>
