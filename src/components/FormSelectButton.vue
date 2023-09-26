<script setup lang="ts">
import type { QRCodeFormat } from '@/lib/qrcodeFormat'
import { qrcodeFormat, setQrcodeFormat } from '@/lib/qrcodeFormat'
import type { PropType } from 'vue'
import { type Icon as IconType } from 'lucide-vue-next'

defineProps({
  format: {
    type: String as PropType<QRCodeFormat>,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button
    class="bg-blue-800/5 hover:bg-blue-800/10 py-1 px-2 rounded-md text-blue-800 data-[is-selected='true']:bg-blue-800/90 transition-colors data-[is-selected='true']:text-white text-xs flex items-center gap-1"
    :data-is-selected="qrcodeFormat === format"
    @click="() => setQrcodeFormat(format)"
  >
    <slot />
    <span>
      {{ title }}
    </span>
  </button>
</template>
