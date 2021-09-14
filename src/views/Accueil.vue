<template>
  <div class="home">
     <header>
     <!-- Slides -->
      <h2>Venez vous défouler</h2>

      <!-- Slider -->
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        :src="require('@/assets/img/salle_de_defoulement.jpg')"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide :src="require('@/assets/img/fitness-3448864_1920.jpg')"></b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide :src="require('@/assets/img/salle_de_defoulement.jpg')"></b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

  
        <!--Fin slide-->
    </header>    
  </div>
</template>

<script>
export default {
  data() {
    return {
          slide: 0,
          sliding: null
        }
  },
  name: "Accueil",
  components: {},
  methods: {
     onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
  },
}
</script>

<style scoped>

</style>
