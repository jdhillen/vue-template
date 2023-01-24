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
    <button @click="store.increment()">Count: {{ store.count }}</button>
    <p>Double: {{ store.doubleCount }}</p>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import { useDefaultStore } from '@/store/DefaultStore';
import Service from '@/services';

const store = useDefaultStore();

const props = defineProps({
  msg: {
    type: String,
    required: false,
    default: 'Hello There!'
  }
});

// Example of a Service to make an API call
Service.getContact().then((response) => {
  console.log(response.data);
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped></style>
