<template>
  <q-page class="background q-pa-md">
    <!-- Menu -->
    <!-- <div class="testContainer row wrap items-start justify-end header">
      <div class="q-px-xl q-py-lg">Project</div>
      <div class="q-px-xl q-py-lg">Contact </div>
    </div> -->
    <!-- Content -->
    <q-carousel
      v-model="slide"
      vertical
      transition-prev="slide-down"
      transition-next="slide-up"
      swipeable
      animated
      control-color="white"
      navigation
      navigation-icon="radio_button_unchecked"
      padding
      arrows
      height="750px">
      <q-carousel-slide name="main" class="background">
        <div class="testContainer row wrap items-center justify-between q-px-xl q-pb-xl">
          <!-- Left Side -->
          <div class="col-8 q-pt-xl">
            <!-- Whole Container -->
            <div class="column wrap">
              <!-- Title -->
              <div class="col-12 main">
                  Twinmoon <br> Studio
              </div>
              <!-- Subtitle -->
              <div class="col-12 subtitle q-mt-md">
                Digital Product Studio
              </div>
            </div>
          </div>
          <!-- Logo -->
          <div class="col-4">
            <!-- Image Container -->
            <div class="twinmoon-logo-container">
              <q-img fit="cover" class="twinmoon-img" src="../assets/twinmoon.svg" />
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<style lang="scss">
@import "../css/app.scss";
// @import url("https://use.typekit.net/pka7udp.css"); // Import Futura
.main {
  color: $title;
  font-family: $font;
  font-weight: 500;
  font-size: 150px;
}
.header {
  color: $subTitle;
  font-family: $font;
}
.subtitle {
  color: $subTitle;
  font-family: $font;
  font-weight: 500;
  font-size: 40px;
}
.twinmoon-img {
  max-width: 100%;
  max-height: 100%;
}

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
import { Todo, Meta } from 'components/models';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { },
  setup() {
    const slide = ref('main');
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta, slide };
  },
});
</script>
