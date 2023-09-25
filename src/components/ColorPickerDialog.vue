<script setup lang="ts">
import { ref } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { ColorPicker } from 'vue-accessible-color-picker'

defineProps({
  color: String,
  id: String,
  onColorChange: Function
})

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>

<template>
  <div class="flex items-center justify-center">
    <button
      type="button"
      @click="openModal"
      class="rounded-md w-7 h-7 z-0 border border-black"
      :style="{ backgroundColor: color }"
    />
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-10" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all flex flex-col items-start p-4 gap-2"
            >
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                Change Foreground Color
              </DialogTitle>
              <ColorPicker
                :visibleFormats="['hex']"
                :id="id"
                :color="color"
                @color-change="onColorChange"
                class="w-80 m-0 p-0"
              />

              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-800/10 px-4 py-2 transition-colors text-sm font-medium text-blue-800 hover:bg-blue-800 hover:text-white"
                @click="closeModal"
              >
                Complete
              </button>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
