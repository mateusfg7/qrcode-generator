<script setup lang="ts">
import { computed, ref } from 'vue'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import { domToPng } from 'modern-screenshot'

import { Download } from 'lucide-vue-next'

import { qrcodeValue } from '../lib/qrcodeValue'
import { color } from '../lib/colors'

const localQRCodeValue = computed(() => {
  if (qrcodeValue.value.length > 0) return qrcodeValue.value

  return 'QRCode Generator, by Mateus Felipe <contact@mateusf.com>.'
})

const qrcodeCanvas = ref<HTMLCanvasElement>()
const qrcodeSVG = ref<SVGAElement>()

const format = ref('PNG')

const options = {
  margin: 0,
  width: 320,
  color
}

const downloadOptions = {
  ...options,
  width: 500
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
    class="flex flex-col items-center justify-between flex-1 gap-8 p-4 bg-white/50 shadow-lg rounded-xl"
  >
    <div class="flex-1 flex items-center">
      <VueQrcode :value="localQRCodeValue" :options="options" @ready="setCanvasRef" />
      <VueQrcode
        :value="localQRCodeValue"
        :options="downloadOptions"
        tag="svg"
        @ready="setSVGRef"
        class="hidden"
      />
    </div>
    <div class="w-full space-y-3">
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
  </div>
</template>
