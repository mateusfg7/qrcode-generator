<script setup lang="ts">
import { Text, Wifi, User2 } from 'lucide-vue-next'

import PlainText from './PlainText.vue'
import WifiForm from './WifiForm.vue'
import ColorsPicker from './ColorsPicker.vue'
import FormSelectButton from './FormSelectButton.vue'
import VCard from './VCard.vue'

import { qrcodeFormat } from '@/lib/qrcodeFormat'
</script>

<template>
  <div class="w-2/3 p-4 bg-white/50 shadow-lg rounded-xl flex flex-col gap-6">
    <div class="flex gap-2">
      <FormSelectButton format="plaintext" title="Text">
        <Text width="15" />
      </FormSelectButton>
      <FormSelectButton format="wifi" title="Wifi">
        <Wifi width="15" />
      </FormSelectButton>
      <FormSelectButton format="vcard" title="vCard">
        <User2 width="15" />
      </FormSelectButton>
    </div>

    <PlainText v-if="qrcodeFormat === 'plaintext'" />
    <WifiForm v-if="qrcodeFormat === 'wifi'" />
    <VCard v-if="qrcodeFormat === 'vcard'" />
    <ColorsPicker />
  </div>
</template>
