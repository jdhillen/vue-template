<!--|== Template =============================================================================== -->
<template>
  <section class="app">
    <img alt="Vue logo" src="./assets/img/logo.png" />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
export default {
  name: 'app',

  props: {},

  components: {},

  data() {
    return {};
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
<style lang="scss">
.app {
  text-align: center;
}

a {
  color: #42b983;
}
</style>
