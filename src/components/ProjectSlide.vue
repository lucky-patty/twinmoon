<!-- eslint-disable max-len -->
<template>
    <div>
        <!-- Content -->
        <div class="testContainer row wrap items-center justify-center q-mt-xl q-px-xl q-pm-xl">
          <!-- Left Side -->
          <div class="col-md-8 col-sm-12 q-pt-xl">
            <!-- Whole Container -->
            <div class="column fit wrap justify-between items-start">
              <!-- Title -->
              <div class="col-12 main">
                  {{title}}<br>
              </div>
              <!-- Description -->
              <div class="col-12 subtitle q-mt-md q-pl-sm">
                {{info}}
              </div>
              <!-- Icon -->
              <div class="col-12 subtitle q-mt-xl q-pl-sm">
                <div class="row wrap items-center justify-start q-mt-xl">
                    <div class="small-logo-container q-mr-xl"
                    @click="changeItem(0)">
                        <q-img
                        fit="fill"
                        ratio="1"
                        src="../assets/bb-logo-white.svg"/>
                    </div>
                    <div class="small-logo-container q-mr-xl"
                        @click="changeItem(1)">
                        <q-img
                        fit="fill"
                        ratio="1"
                        src="../assets/dd-logo-small-white.svg"/>
                    </div>
                    <div class="small-logo-container q-mr-xl"
                        @click="changeItem(2)">
                        <q-img
                        fit="fill"
                        ratio="1"
                        src="../assets/fika-logo-white.svg"/>
                    </div>
                    <div class="small-logo-container q-mr-xl"
                        @click="changeItem(3)">
                        <q-img
                        fit="fill"
                        ratio="1"
                        @click="changeItem(3)"
                        src="../assets/gachii-logo-white.svg"/>
                    </div>
                    <!-- <div class="small-logo-container q-mr-xl">
                        <q-img
                        fit="cover"
                        class="small-imag"
                        src="../assets/dd-logo-small-white.svg"/>
                    </div> -->
                </div>
              </div>
            </div>
          </div>
          <!-- Logo -->
          <div class="col-md-4 mobile-hide q-px-xl">
            <!-- Image Container -->
            <div class="twinmoon-logo-container">
              <q-img fit="cover" class="twinmoon-img" :src="image" />
            </div>
          </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../css/app.scss";
.custom {
  color: red !important;
//   height: 350px;
//   width: 400px;
  font-size: 20rem;
}
.dim-container {
  opacity: 40%;
}
.main {
  color: $title;
  font-family: $font;
  font-weight: $fontTitleWeight;
  font-size: $fontTitleSize;
}
.header {
  color: $subTitle;
  font-family: $font;
}
.subtitle {
  color: $subTitle;
  font-family: $font;
  font-weight: $fontSubTitleWeight;
  font-size: $fontSubTitleSize;
}
.twinmoon-img {
  max-width: 100%;
  max-height: 100%;
}
.small-imag {
  max-width: 100%;
  max-height: 100%;
}
.small-logo-container{
  height: 100%;
  width: 75px;
}
.small-logo-selected {
  height: 100%;
  width: 75px;
}

</style>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { defineComponent, ref } from 'vue';
import bb from 'assets/bb-logo-blue.svg';
// import bb from '../assets/bb-logo-blue.svg';
import dd from '../assets/dd-logo-big.svg';
import fika from '../assets/fika-logo-white.svg';
import gachii from '../assets/gachii-logo-normal.svg';

const allTitle = [
  'Baitbuy',
  'Drunkdude',
  'Fika',
  'Gachii',
];

const allImages = [
  bb,
  dd,
  fika,
  gachii,
];

const allInfo = [
  'Product Review platform that rewards cryptocurrency as reward. We also offer insights to business owner',
  'Alcohol e-commerce platform that allows users to purchase goods using crypto currency. We are now operate in South East Asia region. ',
  'Local goods e-commerce platform which use cryptocurrency. We operate mainly in South East Asia region',
  'Gashapon crypto platform for artists who sell toys and other collectable items',
];
const allProject = [
  {
    title: 'Drunkdude',
    description: 'Alcohol e-commerce platform that allows users to purchase goods using crypto currency. We are now operate in South East Asia region.',
    smallLogo: '../assets/dd-logo-small-white.svg',
    bigLogo: '../assets/dd-logo-big.svg',
  },
];

export default defineComponent({
  name: 'ProjectSlide',
  data() {
    return {
      title: ref(allTitle[0]),
      info: ref(allInfo[0]),
      image: ref(allImages[0]),
    };
  },
  setup() {
    const slide = ref('main');
    // const title = ref(allTitle[0]);
    // const info = ref(allInfo[0]);
    // const image = ref(allImages[0]);
    return {
      slide,
      allProject,
    //   title,
    //   info,
    //   image,
    };
  },
  methods: {
    changeItem(index: number) {
      if (index <= this.title.length - 1) {
        this.title = allTitle[index];
        this.info = allInfo[index];
        this.image = allImages[index];
      }
    },
  },
});
</script>
