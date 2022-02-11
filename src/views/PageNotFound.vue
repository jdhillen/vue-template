<!--|== Template =============================================================================== -->
<template>
  <MetaData :data="metaData" />
  <section class="page-not-found">
    <h1>404</h1>
    <router-link class="button" :to="{ name: 'Home' }"
      >Back to the home page</router-link
    >
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import MetaData from '@/components/global/MetaData.vue';

export default {
  name: 'page-not-found-page',

  props: {},

  components: {
    MetaData
  },

  data() {
    return {
      metaData: {
        title: '404',
        description: 'This is the description for the 404 page',
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
.page-not-found {
}
</style>
