<!--|== Template =============================================================================== -->
<template>
  <div class="typescript-example">
    <h3>TypeScript Example</h3>
    <p>Count: {{ count }}</p>
    <p>Double: {{ doubled }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script setup lang="ts">
  import { ref, computed } from 'vue';
  // Import example (types available from @/types):
  // import type { LoadingState, ID, User, ApiResponse } from '@/types'

  // Reactive state with TypeScript
  const count = ref<number>(0);

  // Example types for reference (commented to avoid unused warnings)
  // const loadingState = ref<LoadingState>('idle')
  // const userId = ref<ID>(1)

  // Computed property with inferred types
  const doubled = computed(() => count.value * 2);

  // Function with TypeScript
  const increment = (): void => {
    count.value++;
  };

  // Example of using custom types (commented for reference)
  // const setLoading = (state: LoadingState): void => {
  //   loadingState.value = state
  // }
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
  .typescript-example {
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>
