<script setup lang="ts">
import { qrcodeValue } from '../lib/qrcodeValue'
</script>
<template>
  <div class="flex items-center justify-center w-2/3 h-full bg-white shadow-lg rounded-xl">
    <textarea
      v-model="qrcodeValue"
      class="w-full bg-transparent resize-none h-44 focus:ring-0"
      placeholder="Write your text here..."
    />
  </div>
</template>
