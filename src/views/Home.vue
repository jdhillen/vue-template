<!--|== Template =============================================================================== -->
<template>
  <section class="home">
    <hello-world />
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home-page',

  props: {},

  components: {
    HelloWorld
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
.home {
}
</style>
