<script setup lang="ts">
import { type ColorChangeEvent } from 'vue-accessible-color-picker'
import { color } from '../lib/colors'

import ColorPickerDialog from './ColorPickerDialog.vue'

function updateDarkColor(eventData: ColorChangeEvent) {
  color.dark = eventData.cssColor
}
function updateLightColor(eventData: ColorChangeEvent) {
  color.light = eventData.cssColor
}
</script>
<template>
  <div class="flex gap-5">
    <div class="text-lg flex flex-col gap-3">
      <span>Foreground</span>
      <span>Background</span>
    </div>
    <div class="flex flex-col gap-3">
      <ColorPickerDialog
        id="color-picker-dark"
        :color="color.dark"
        :on-color-change="updateDarkColor"
      />
      <ColorPickerDialog
        id="color-picker-light"
        :color="color.light"
        :on-color-change="updateLightColor"
      />
    </div>
  </div>
</template>
