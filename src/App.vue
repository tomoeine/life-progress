<template>
  <div class="w-full h-full bg-gray-100 text-gray-800">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
body {
  font-family: $font_family_main !important;
  color: $color_gray-700;
}
</style>
