<template>
  <q-page class="column justify-center">
    <!-- Menu -->
    <!-- <div class="testContainer row wrap items-start justify-end header">
      <div class="q-px-xl q-py-lg">Project</div>
      <div class="q-px-xl q-py-lg">Contact </div>
    </div> -->
    <!-- Content -->
    <div class="desktop-only background">
      <div class="col-12">
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
          <contact-slide />
        </q-carousel-slide>
      </q-carousel>
      </div>
    </div>

    <div class="col-12 column wrap justify-start items-center mobile-only background">
      <div class="mobileTitleFont">
        Thank You
      </div>
      <div class="mobileInfoFont q-mt-xl qrcode-btc">
        <!-- bc1qqaxa2xfxqd25885v2gw9rv9r2ly8tcdkgpxezf -->
        <q-img src="../assets/qrcode.svg" />
      </div>
      <div class="mobile-only ">
          <q-img ratio="1" fit="fit" src="../assets/qrcode.svg" />
      </div>
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

.mobileInfoFont {
  color: $title;
  font-family: $font;
  font-weight: $fontTitleWeight;
  font-size: $fontMobileSize;
}

.mobileTitleFont {
  color: $title;
  font-family: $font;
  font-weight: $fontTitleWeight;
  font-size: 50px;
}

.qrcode-btc {
  width: 200px;
  height: 200px;
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
import ContactSlide from 'components/ContactSlide.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { HomeSlide, ProjectSlide, ContactSlide },
  setup() {
    const slide = ref('main');
    return { slide };
  },
});
</script>
