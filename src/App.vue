<!--|== Template =============================================================================== -->
<template>
  <section class="app container">
    <div class="row">
      <div class="twelve columns">
        <div id="nav">
          <router-link :to="{ name: 'Home' }">Home</router-link> |
          <router-link :to="{ name: 'About' }">About</router-link>
        </div>
      </div>
    </div>
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
  margin-top: 50px;
}
</style>
