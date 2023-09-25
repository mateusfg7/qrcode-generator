<script setup lang="ts">
import { qrcodeValue } from '../lib/qrcodeValue'
import ColorsPicker from './ColorsPicker.vue'
</script>

<template>
  <div class="space-y-6 w-2/3 p-4 bg-white/50 shadow-lg rounded-xl">
    <textarea
      v-model="qrcodeValue"
      class="w-full bg-transparent resize-none h-44 focus:ring-0"
      placeholder="Write your text here..."
    />
    <ColorsPicker />
  </div>
</template>
