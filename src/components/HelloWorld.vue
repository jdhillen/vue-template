<!--|== Template =============================================================================== -->
<template>
  <section class="index">
    <h1>{{ msg }}</h1>
    <p>
      <a
        href="https://vitejs.dev/guide/features.html"
        target="_blank"
        rel="noopener"
      >
        Vite Documentation
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank" rel="noopener"
        >Vue 3 Documentation</a
      >
    </p>
    <button @click="increment()">Count: {{ count }}</button>
    <p>Double: {{ doubleCount }}</p>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import { mapState, mapActions } from 'pinia'
import { useDefaultStore } from '@/store/DefaultStore';
import { demoFunction } from '@/filters';
import Service from '@/services';

const defaultStore = useDefaultStore();

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

    // Example of a Service to make an API call
    Service.getContact().then((response) => {
      console.log(response.data);
    });
  },

  beforeUpdate() {},

  updated() {},

  beforeUnmount() {},

  unmounted() {},

  computed: {
    ...mapState(useDefaultStore, ['count', 'doubleCount'])
  },

  methods: {
    ...mapActions(useDefaultStore, ['increment'])
  },

  watch: {}
};
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped></style>
