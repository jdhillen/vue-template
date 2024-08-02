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
    <button @click="globalStore.increment()">Count: {{ globalStore.count }}</button>
    <p>Double: {{ globalStore.doubleCount }}</p>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import { useGlobalStore } from '@/store/global';
import Services from '@/services';

const globalStore = useGlobalStore();

const props = defineProps({
  msg: {
    type: String,
    required: false,
    default: 'Hello There!'
  }
});

// Example of a Service to make an API call
Services.getPokemon().then((res) => {
  console.log(res.data);
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped></style>
