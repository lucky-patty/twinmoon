<template>
    <div class="bg-black">
        <!-- Content -->
        <div class="testContainer row wrap items-center justify-center q-mt-xl q-px-xl ">
          <!-- Left Side -->
          <div class="col-8 q-pt-xl">
            <!-- Whole Container -->
            <div class="column wrap">
              <!-- Title -->
              <div class="col-12 main">
                  Twinmoon <br> Studio
              </div>
              <!-- Subtitle -->
              <div class="col-12 subtitle q-mt-md q-pl-sm">
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
    </div>
</template>

<style lang="scss" scoped>
@import "../css/app.scss";

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

</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomeSlide',
  setup() {
    const slide = ref('main');
    return { slide };
  },
});
</script>
