<!--|== Template =============================================================================== -->
<template>
  <section class="index">
    <h1>{{ msg }}</h1>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Documentation
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>
    <button @click="setCount">Count: {{ count }}</button>

    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import { mapState, mapActions } from 'vuex';
import { demoFunction } from '../filters';

export default {
  name: 'index-page',

  props: {
    msg: {
      type: String,
      required: false,
      default: 'Hello There!'
    }
  },

  components: {},

  data() {
    return {};
  },

  beforeCreate() {},

  created() {},

  beforeMount() {},

  mounted() {
    // Example of a untility function that replaces Filters in Vue 3
    demoFunction();
  },

  beforeUpdate() {},

  updated() {},

  beforeUnmount() {},

  unmounted() {},

  computed: {
    ...mapState(['count'])
  },

  methods: {
    ...mapActions(['setCount'])
  },

  watch: {}
};
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped></style>
