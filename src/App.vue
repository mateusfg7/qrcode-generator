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
  <div class="h-screen flex justify-center items-center">
    <div class="border border-red-600 w-2/3 h-2/3 flex">
      <div class="border border-red-600 w-2/3 h-full flex items-center justify-center">
        <textarea
          v-model="qrcodeValue"
          class="w-full h-28 resize-none"
          placeholder="Write your text here..."
        />
      </div>
      <div class="border border-red-600 flex-1 flex items-center justify-center flex-col p-4 gap-3">
        <VueQrcode :value="qrcodeValue" tag="svg" :options="{ margin: 0 }" @ready="setCanvasRef" />
        <button @click="download" class="bg-blue-400 p-4 rounded-md">Download Image</button>
      </div>
    </div>
  </div>
</template>
