<script setup lang="ts">
import VueQrcode from '@chenfengyuan/vue-qrcode'
import { ref } from 'vue'

import { qrcodeValue } from './lib/qrcodeValue'

const qrcodeSVG = ref<SVGAElement>()

function setSVGRef(svg: SVGAElement) {
  qrcodeSVG.value = svg
}

function downloadSVG() {
  if (!qrcodeSVG.value) return

  const svgBlob = new Blob([qrcodeSVG.value.outerHTML], { type: 'image/svg+xml;charset=utf-8' })
  const svgUrl = URL.createObjectURL(svgBlob)

  const downloadLink = document.createElement('a')

  downloadLink.href = svgUrl
  downloadLink.download = 'qrcode.svg'

  downloadLink.click()
  downloadLink.remove()
}
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex w-2/3 gap-5 h-2/3">
      <div class="flex items-center justify-center w-2/3 h-full bg-white shadow-lg rounded-xl">
        <textarea v-model="qrcodeValue" class="w-full bg-transparent resize-none h-44 focus:ring-0"
          placeholder="Write your text here..." />
      </div>
      <div class="flex flex-col items-center justify-center flex-1 gap-3 p-4 bg-white shadow-lg rounded-xl">
        <VueQrcode :value="qrcodeValue" tag="svg" :options="{ margin: 0 }" @ready="setSVGRef" />
        <button @click="downloadSVG" class="p-4 bg-blue-400 rounded-md">Download Image</button>
      </div>
    </div>
  </div>
</template>
