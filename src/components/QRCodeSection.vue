<script setup lang="ts">
import { ref } from 'vue'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import { domToPng } from 'modern-screenshot'

import { Download } from 'lucide-vue-next'

import { qrcodeValue } from '../lib/qrcodeValue'
import { color } from '../lib/colors'

const qrcodeCanvas = ref<HTMLCanvasElement>()
const qrcodeSVG = ref<SVGAElement>()

const format = ref('PNG')

const options = {
  margin: 0,
  width: 300,
  color
}

function setSVGRef(svg: SVGAElement) {
  qrcodeSVG.value = svg
}
function setCanvasRef(canvas: HTMLCanvasElement) {
  qrcodeCanvas.value = canvas
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

function downloadPNG() {
  if (!qrcodeCanvas.value) return

  domToPng(qrcodeCanvas.value).then((dataUrl) => {
    const link = document.createElement('a')

    link.download = 'qrcode.png'
    link.href = dataUrl

    link.click()
    link.remove()
  })
}

function handleDownload() {
  const formatActions: { [key: string]: () => void } = {
    PNG: downloadPNG,
    SVG: downloadSVG
  }

  formatActions[format.value]()
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center flex-1 gap-3 p-4 bg-white shadow-lg rounded-xl"
  >
    <VueQrcode :value="qrcodeValue ?? 'Mateus'" :options="options" @ready="setCanvasRef" />
    <VueQrcode
      :value="qrcodeValue"
      tag="svg"
      :options="options"
      @ready="setSVGRef"
      class="hidden"
    />
    <div class="w-full">
      <span class="text-sm text-black/50">File Format</span>
      <select
        v-model="format"
        class="w-full cursor-pointer rounded-md border-black/30 hover:border-black focus:ring-0 transition-colors"
      >
        <option value="PNG">PNG</option>
        <option value="SVG">SVG</option>
      </select>
    </div>
    <button
      @click="handleDownload"
      class="p-3 w-full leading-none flex gap-2 items-center justify-center transition-colors rounded-md hover:bg-blue-800 hover:text-white bg-blue-800/20 text-blue-800"
    >
      <Download />
      <span>Download</span>
    </button>
  </div>
</template>
