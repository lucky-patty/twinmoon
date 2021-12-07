<template>
    <div>
        <!-- Content -->
        <div class="testContainer row wrap items-center justify-center q-mt-xl q-px-xl q-pm-xl">
          <!-- Left Side -->
          <div class="col-8 q-pt-xl">
            <!-- Whole Container -->
            <div class="column fit wrap justify-between items-start">
              <!-- Title -->
              <div class="col-12 main">
                  Drunkdude<br>
              </div>
              <!-- Description -->
              <div class="col-12 subtitle q-mt-md q-pl-sm">
                Alcohol e-commerce platform that allows
                users to purchase goods using crypto currency.
                We are now operate in South East Asia region.
              </div>
              <!-- Icon -->
              <div class="col-12 subtitle q-mt-md q-pl-sm">
                  Digital Product Studio
                  <div class="row wrap items-start "></div>
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
  name: 'ProjectSlide',
  setup() {
    const slide = ref('main');
    return { slide };
  },
});
</script>
