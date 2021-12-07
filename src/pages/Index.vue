<template>
  <q-page class="column justify-center">
    <!-- Menu -->
    <!-- <div class="testContainer row wrap items-start justify-end header">
      <div class="q-px-xl q-py-lg">Project</div>
      <div class="q-px-xl q-py-lg">Contact </div>
    </div> -->
    <!-- Content -->
    <div class="col-12 background">
    <q-carousel
      v-model="slide"
      vertical
      swipeable
      control-color="white"
      navigation
      height="100%">
      <!-- Home Slide -->
      <q-carousel-slide name="main" class="background">
        <home-slide />
      </q-carousel-slide>
      <!-- Project Slide -->
      <q-carousel-slide name="project" class="background">
        <project-slide />
      </q-carousel-slide>
      <!-- Contact Us -->
      <q-carousel-slide name="contact" class="background">
      </q-carousel-slide>
    </q-carousel>
    </div>
  </q-page>
</template>

<style lang="scss">
@import "../css/app.scss";
// @import url("https://use.typekit.net/pka7udp.css"); // Import Futura

.background {
  background-color: $mainBG;
  width: 100%;
  height: 100%;
}

.testContainer {
  width: 100%;
  // height: 150px;
  font-size: 30px;
}

.twinmoon-logo-container {
  width: 350px;
}

.testContainer1 {
  width: 100%;
  height: 150px;
  background-color: red;
}
.testContainer2 {
  width: 100%;
  height: 150px;
  background-color: blue;
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HomeSlide from 'components/HomeSlide.vue';
import ProjectSlide from 'components/ProjectSlide.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { HomeSlide, ProjectSlide },
  setup() {
    const slide = ref('main');
    return { slide };
  },
});
</script>
