import { ref } from 'vue'

export type QRCodeFormat = 'plaintext' | 'wifi' | 'vcard'
export const qrcodeFormat = ref<QRCodeFormat>('plaintext')

export function setQrcodeFormat(format: QRCodeFormat) {
  qrcodeFormat.value = format
}
