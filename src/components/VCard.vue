<script setup lang="ts">
// vCard Docs: https://en.wikipedia.org/wiki/VCard

import { qrcodeValue } from '@/lib/qrcodeValue'
import { ref, watch } from 'vue'

const name = ref('')

const mobile = ref('')
const phone = ref('')
const email = ref('')

const company = ref('')
const title = ref('')

const street = ref('')
const houseNumber = ref('')
const city = ref('')
const zip = ref('')
const state = ref('')
const country = ref('')

const website = ref('')

watch(
  [
    name,
    mobile,
    phone,
    email,
    company,
    title,
    street,
    houseNumber,
    city,
    zip,
    state,
    country,
    website
  ],
  () => {
    qrcodeValue.value = `BEGIN:VCARD
VERSION:3.0
N:${name.value}
ORG:${company.value}
TITLE:${title.value}
ADR:;;${street.value}\\,${houseNumber.value};${city.value};${state.value};${zip.value};${country.value}
TEL;WORK;VOICE:${phone.value}
TEL;CELL:${mobile.value}
EMAIL;WORK;INTERNET:${email.value}
URL:${website.value}
END:VCARD`
  }
)
</script>

<template>
  <div class="flex-1 pt-4">
    <div class="flex-1 flex flex-col gap-4">
      <div class="flex">
        <label class="h-8 w-[30%] flex items-center" for="name">Your name</label>
        <div class="flex-1">
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Complete name"
            class="rounded-md w-full bg-white/50 h-8 px-2 transition-colors leading-none border-none focus:ring-blue-800/50 focus:bg-white/90"
          />
        </div>
      </div>
      <div class="flex">
        <label class="h-8 w-[30%] flex items-center">Contact</label>
        <div class="flex-1 flex gap-2">
          <input
            type="text"
            id="mobile"
            v-model="mobile"
            placeholder="Mobile"
            class="rounded-md w-full bg-white/50 h-8 px-2 transition-colors leading-none border-none focus:ring-blue-800/50 focus:bg-white/90"
          />
          <input
            type="text"
            id="phone"
            v-model="phone"
            placeholder="Phone"
            class="rounded-md w-full bg-white/50 h-8 px-2 transition-colors leading-none border-none focus:ring-blue-800/50 focus:bg-white/90"
          />
        </div>
      </div>
      <div class="flex">
        <label class="h-8 w-[30%] flex items-center" for="email">Email</label>
        <div class="flex-1">
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="your@email.com"
            class="rounded-md w-full bg-white/50 h-8 px-2 transition-colors leading-none border-none focus:ring-blue-800/50 focus:bg-white/90"
          />
        </div>
      </div>
      <div class="flex">
        <label class="h-8 w-[30%] flex items-center" for="company">Company</label>
        <div class="flex-1 flex gap-2">
          <input
            type="text"
            id="company"
            v-model="company"
            placeholder="Company"
            class="rounded-md w-full bg-white/50 h-8 px-2 transition-colors leading-none border-none focus:ring-blue-800/50 focus:bg-white/90"
          />
          <input
            type="text"
            id="title"
            v-model="title"
            placeholder="Your Job"
            class="rounded-md w-full bg-white/50 h-8 px-2 transition-colors leading-none border-none focus:ring-blue-800/50 focus:bg-white/90"
          />
        </div>
      </div>
      <div class="flex">
        <label class="h-8 w-[30%] flex items-center">Address</label>
        <div class="flex-1 flex flex-col gap-2">
          <div class="flex-1 flex gap-2">
            <input
              type="text"
              id="street"
              v-model="street"
              placeholder="Street"
              class="rounded-md w-full bg-white/50 h-8 px-2 transition-colors leading-none border-none focus:ring-blue-800/50 focus:bg-white/90"
            />
            <input
              type="number"
              id="number"
              v-model="houseNumber"
              placeholder="Number"
              class="rounded-md w-full bg-white/50 h-8 px-2 transition-colors leading-none border-none focus:ring-blue-800/50 focus:bg-white/90"
            />
          </div>
          <div class="flex-1 flex gap-2">
            <input
              type="text"
              id="city"
              v-model="city"
              placeholder="City"
              class="rounded-md w-full bg-white/50 h-8 px-2 transition-colors leading-none border-none focus:ring-blue-800/50 focus:bg-white/90"
            />
            <input
              type="text"
              id="zip"
              v-model="zip"
              placeholder="zip"
              class="rounded-md w-full bg-white/50 h-8 px-2 transition-colors leading-none border-none focus:ring-blue-800/50 focus:bg-white/90"
            />
          </div>
          <div class="flex-1 flex gap-2">
            <input
              type="text"
              id="state"
              v-model="state"
              placeholder="State"
              class="rounded-md w-full bg-white/50 h-8 px-2 transition-colors leading-none border-none focus:ring-blue-800/50 focus:bg-white/90"
            />
            <input
              type="text"
              id="country"
              v-model="country"
              placeholder="Country"
              class="rounded-md w-full bg-white/50 h-8 px-2 transition-colors leading-none border-none focus:ring-blue-800/50 focus:bg-white/90"
            />
          </div>
        </div>
      </div>
      <div class="flex">
        <label class="h-8 w-[30%] flex items-center" for="website">Website</label>
        <div class="flex-1">
          <input
            type="url"
            id="website"
            v-model="website"
            placeholder="www.yourwebsite.com"
            class="rounded-md w-full bg-white/50 h-8 px-2 transition-colors leading-none border-none focus:ring-blue-800/50 focus:bg-white/90"
          />
        </div>
      </div>
    </div>
  </div>
</template>
