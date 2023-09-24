<script setup lang="ts">
import { ref } from 'vue'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import { qrcodeValue } from '../lib/qrcodeValue'

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
  <div class="flex flex-col items-center justify-center flex-1 gap-3 p-4 bg-white shadow-lg rounded-xl">
    <VueQrcode :value="qrcodeValue" tag="svg" :options="{ margin: 0 }" @ready="setSVGRef" />
    <button @click="downloadSVG" class="p-4 bg-blue-400 rounded-md">Download Image</button>
  </div>
</template>