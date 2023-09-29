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
  <div class="flex gap-6">
    <div class="flex gap-3 items-center">
      <span>Foreground</span>
      <ColorPickerDialog
        id="color-picker-dark"
        :color="color.dark"
        :on-color-change="updateDarkColor"
      />
    </div>
    <div class="flex gap-3 items-center">
      <span>Background</span>

      <ColorPickerDialog
        id="color-picker-light"
        :color="color.light"
        :on-color-change="updateLightColor"
      />
    </div>
  </div>
</template>
