<script setup lang="ts">
import { qrcodeValue } from '../lib/qrcodeValue'
</script>

<template>
  <textarea
    v-model="qrcodeValue"
    class="w-full text-xl resize-none p-4 rounded-md flex-1 bg-white/30 transition-colors leading-none border-none focus:ring-blue-800/20"
    placeholder="Write your text here..."
  />
</template>
