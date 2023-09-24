<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import { ColorPicker } from 'vue-accessible-color-picker'

defineProps({
  color: String,
  id: String,
  onColorChange: Function
})
</script>

<template>
  <Menu as="div" class="relative">
    <MenuButton class="flex items-center">
      <button
        class="rounded-md w-7 h-7 z-0 border border-black"
        :style="{ backgroundColor: color }"
      />
    </MenuButton>
    <MenuItems
      as="div"
      class="w-fit absolute z-50 top-full animate-fade-down p-2 bg-white shadow-md rounded-xl"
    >
      <ColorPicker
        :visibleFormats="['hex']"
        :id="id"
        :color="color"
        @color-change="onColorChange"
        class="w-96"
      />
    </MenuItems>
  </Menu>
</template>
