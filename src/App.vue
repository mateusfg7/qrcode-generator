<script setup lang="ts">
import VueQrcode from '@chenfengyuan/vue-qrcode'
import { ref } from 'vue'

const qrcodeValue = ref('QRCode Generator, by Mateus Felipe <contact@mateusf.com>')
const qrcodeSVG = ref<SVGAElement>()

function setCanvasRef(svg: SVGAElement) {
  qrcodeSVG.value = svg
}

function download() {
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
    <div class="flex w-2/3 border border-red-600 h-2/3">
      <div class="flex items-center justify-center w-2/3 h-full border border-red-600">
        <textarea v-model="qrcodeValue" class="w-full resize-none h-28" placeholder="Write your text here..." />
      </div>
      <div class="flex flex-col items-center justify-center flex-1 gap-3 p-4 border border-red-600">
        <VueQrcode :value="qrcodeValue" tag="svg" :options="{ margin: 0 }" @ready="setCanvasRef" />
        <button @click="download" class="p-4 bg-blue-400 rounded-md">Download Image</button>
      </div>
    </div>
  </div>
</template>
