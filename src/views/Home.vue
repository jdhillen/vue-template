<!--|== Template =============================================================================== -->
<template>
  <MetaData :data="metaData" />
  <section class="home">
    <hello-world />
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import MetaData from '@/components/global/MetaData.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home-page',

  props: {},

  components: {
    MetaData,
    HelloWorld
  },

  data() {
    return {
      metaData: {
        title: 'Home',
        description: 'This is the description for the Home page',
        image: 'https://via.placeholder.com/1500x780'
      }
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
