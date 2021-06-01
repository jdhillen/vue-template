<!--|== Template =============================================================================== -->
<template>
  <teleport to="head">
    <!-- Primary Meta Tags -->
    <title>{{ name }} - {{ title }}</title>
    <meta name="title" :content="title" />
    <meta name="description" :content="description" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" :content="url" />
    <meta property="og:title" :content="title" />
    <meta property="og:description" :content="description" />
    <meta property="og:image" :content="image" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" :content="url" />
    <meta property="twitter:title" :content="title" />
    <meta property="twitter:description" :content="description" />
    <meta property="twitter:image" :content="image" />
  </teleport>
</template>

<!--|== Scripts ================================================================================ -->
<script>
export default {
  name: 'meta-data',

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  components: {},

  data() {
    return {
      name: import.meta.env.VITE_APP_NAME,
      url: import.meta.env.VITE_APP_URL + this.$route.path,
      title: this.data.title,
      description: this.data.description, // 155 Characters
      image: this.data.image // 1500x780
    };
  },

  beforeCreate() {},

  created() {},

  beforeMount() {},

  mounted() {
    console.log(this.url);
  },

  beforeUpdate() {},

  updated() {},

  beforeUnmount() {},

  unmounted() {},

  computed: {},

  methods: {},

  watch: {}
};
</script>
