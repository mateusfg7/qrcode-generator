<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

import ConfigSection from './components/ConfigSection.vue'
import QRCodeSection from './components/QRCodeSection.vue'
</script>

<template>
  <div class="flex items-center justify-center h-screen relative overflow-hidden">
    <div
      class="bg-blue-800/20 h-[500px] w-[500px] -z-10 rounded-full absolute -top-32 left-56 blur-[200px]"
    />
    <div
      class="bg-blue-600/20 h-[500px] w-[500px] -z-20 rounded-full absolute top-[300px] left-[700px] blur-[100px]"
    />
    <a
      href="https://mateusf.com"
      rel="author"
      target="_blank"
      class="inline-flex absolute bottom-3 right-3 text-sm leading-none items-end opacity-30 hover:opacity-100 transition-opacity"
      >Author <ArrowUpRight class="w-2 h-min"
    /></a>
    <div class="flex w-[70%] gap-5 h-fit">
      <ConfigSection />
      <QRCodeSection />
    </div>
  </div>
</template>
