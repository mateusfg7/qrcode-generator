<script setup lang="ts">
import { ref, watch } from 'vue'
import { qrcodeValue } from '../lib/qrcodeValue'

const currValue = ref('')

watch([currValue], () => {
  qrcodeValue.value = currValue.value
})
</script>

<template>
  <textarea
    v-model="currValue"
    class="w-full text-xl resize-none p-4 rounded-md flex-1 bg-white/30 transition-colors leading-none border-none focus:ring-blue-800/20"
    placeholder="Write your text here..."
  />
</template>
