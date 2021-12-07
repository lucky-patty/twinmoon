<template>
  <q-layout view="hHh lpR fFf">
    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header> -->

    <q-page-container class="bg-black">
      <router-view />
    </q-page-container>

    <q-footer >
      <q-toolbar class="row bg-black justify-end q-px-xl">
        <div class="copyright q-pr-lg q-pb-xl">
            © 2020, Thailand
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style lang="scss">

@import "../css/app.scss";
.copyright {
  color : $copyright;
  font-family: $font;
  font-size: 20px;
}
</style>

<script lang="ts">

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
