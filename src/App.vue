<script setup lang="ts">
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
    <div class="flex w-2/3 gap-5 h-2/3">
      <ConfigSection />
      <QRCodeSection />
    </div>
  </div>
</template>
