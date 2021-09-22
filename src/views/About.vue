<!--|== Template =============================================================================== -->
<template>
  <MetaData :data="metaData" />
  <section class="about row">
    <div class="twelve columns">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        mollis laoreet lectus lobortis luctus. Aenean vel orci ante. Mauris sit
        amet consequat tortor. Mauris tristique sodales nisl, vel tincidunt
        turpis commodo quis. Phasellus sodales, diam nec euismod pretium, lectus
        lacus pharetra neque, quis laoreet justo nisl ut orci. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Curabitur rutrum,
        quam non feugiat egestas, tortor sem rutrum mauris, eget semper ante
        justo vel mauris.
      </p>
      <p>
        Praesent eu molestie nisi. Sed nec tincidunt nibh. Ut molestie
        vestibulum ligula, vel interdum leo sollicitudin quis. Sed lectus ante,
        pellentesque eu efficitur ut, euismod sed enim. Vestibulum at sem ex.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Fusce et lacus sit amet lorem faucibus aliquam vel quis
        libero. Donec quis pharetra augue. In rutrum odio vel lacus eleifend
        iaculis. Nunc lacus nisi, feugiat in quam eget, vulputate fringilla
        nunc. Nunc in mattis lectus. Quisque facilisis felis id enim viverra
        sagittis. Duis a lacus nunc.
      </p>
      <p>
        Curabitur pretium erat nisi, vitae pretium velit aliquam efficitur.
        Aliquam metus leo, gravida in magna ut, pellentesque ornare est. Etiam
        facilisis porta nibh, convallis varius neque imperdiet ut. Fusce at mi a
        nisi tincidunt mollis. Donec et erat et augue pulvinar convallis. Nam
        luctus egestas purus et iaculis. Maecenas efficitur purus ut posuere
        sodales. Curabitur ac dignissim ante. Nulla faucibus mauris ac dui
        dictum ornare. Integer accumsan sem metus, id ultricies sem cursus
        vitae. Fusce accumsan, sapien at tempor eleifend, tortor purus efficitur
        tortor, ut maximus sapien lectus ut ante. Pellentesque aliquam diam eu
        porta luctus. Curabitur nec nunc sed enim pharetra vestibulum. Nam
        semper nulla non lectus consequat, consequat interdum ex vehicula. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Duis mattis nisl diam.
      </p>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import MetaData from '@/components/global/MetaData.vue';

export default {
  name: 'about-page',

  props: {},

  components: {
    MetaData
  },

  data() {
    return {
      metaData: {
        title: 'About',
        description: 'This is the description for the About page',
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
.about {
}
</style>
