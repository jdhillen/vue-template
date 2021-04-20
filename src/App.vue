<!--|== Template =============================================================================== -->
<template>
  <section class="app">
    <h1>{{ title }}</h1>
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
    return {
      title: import.meta.env.VITE_APP_TITLE
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
<style lang="scss">
.app {
  text-align: center;
}
</style>
