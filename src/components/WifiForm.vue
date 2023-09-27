<script setup lang="ts">
import { qrcodeValue } from '@/lib/qrcodeValue'
import { ref, watch } from 'vue'

const ssid = ref('')
const hidden = ref(false)
const password = ref('')
const encryption = ref('WPA')

watch([ssid, hidden, password, encryption], () => {
  const pass = encryption.value !== 'nopass' ? `P:${password.value}` : ''
  qrcodeValue.value = `WIFI:T:${encryption.value};S:${ssid.value};${pass};H:${hidden.value};;`
})
</script>

<template>
  <div class="flex-1 pt-4">
    <div class="flex gap-4">
      <div class="flex flex-col gap-4">
        <label class="h-10 flex-1 flex items-center" for="ssid">SSID</label>
        <label
          :data-is-disabled="encryption === 'nopass'"
          class="h-10 flex-1 flex items-center data-[is-disabled='true']:opacity-25 transition-opacity"
          for="password"
          >Password</label
        >
        <span class="h-10 flex-1 flex items-center">Encryption</span>
      </div>
      <div class="flex-1 flex flex-col gap-4">
        <div class="flex items-center gap-6 h-10">
          <input
            type="text"
            id="ssid"
            v-model="ssid"
            placeholder="My Network"
            class="rounded-md flex-1 bg-white/50 px-2 h-full transition-colors leading-none border-none focus:ring-blue-800/50 focus:bg-white/90"
          />
          <div class="flex items-center gap-3">
            <label for="hidden">Hidden</label>
            <input
              class="rounded-md bg-white h-full p-2 transition-colors leading-none border-blue-800 focus:ring-0 cursor-pointer text-blue-800"
              type="checkbox"
              id="hidden"
              v-model="hidden"
            />
          </div>
        </div>
        <input
          class="rounded-md flex-1 bg-white/50 px-2 h-10 transition-all leading-none border-none focus:ring-blue-800/50 focus:bg-white/90 disabled:opacity-25"
          type="password"
          id="password"
          placeholder="SuPeR@sEcReT$PaSsWoRd$123%"
          :disabled="encryption === 'nopass'"
          v-model="password"
        />
        <div class="h-10 flex items-center gap-5">
          <div class="flex items-center gap-2">
            <input
              class="cursor-pointer focus:ring-blue-800/50 text-blue-800"
              type="radio"
              v-model="encryption"
              name="encryption"
              id="nopass"
              value="nopass"
            />
            <label class="cursor-pointer" for="nopass">nopass</label>
          </div>
          <div class="flex items-center gap-2">
            <input
              class="cursor-pointer focus:ring-blue-800/50 text-blue-800"
              type="radio"
              v-model="encryption"
              name="encryption"
              id="WPA"
              value="WPA"
            />
            <label class="cursor-pointer" for="WPA">WPA</label>
          </div>
          <div class="flex items-center gap-2">
            <input
              class="cursor-pointer focus:ring-blue-800/50 text-blue-800"
              type="radio"
              v-model="encryption"
              name="encryption"
              id="WPA2-EAP"
              value="WPA2-EAP"
            />
            <label class="cursor-pointer" for="WPA2-EAP">WPA2-EAP</label>
          </div>
          <div class="flex items-center gap-2">
            <input
              class="cursor-pointer focus:ring-blue-800/50 text-blue-800"
              type="radio"
              v-model="encryption"
              name="encryption"
              id="WEP"
              value="WEP"
            />
            <label class="cursor-pointer" for="WEP">WEP</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <style lang="postcss">
input {
  @apply rounded-xl border-none;
}
</style> -->
