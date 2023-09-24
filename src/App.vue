<script setup lang="ts">
import ConfigSection from './components/ConfigSection.vue'
import QRCodeSection from './components/QRCodeSection.vue'
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex w-2/3 gap-5 h-2/3">
      <ConfigSection />
      <QRCodeSection />
    </div>
  </div>
</template>
