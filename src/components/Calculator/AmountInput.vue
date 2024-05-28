<template>
  <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 items-center pt-2">
    <div class="w-full md:w-2/3 flex flex-col space-y-2">
      <input v-model="localAmount" id="amount-range" min="300" max="7200" type="range" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" :style="rangeBackground">
      <div class="flex items-center justify-between text-[#21093A] text-sm translate-y-3">
        <span>300 €</span>
        <span>7,200 €</span>
      </div>
    </div>
    <div class="w-full md:w-1/3 relative">
      <label for="name" class="absolute -top-2 left-2 rounded-md inline-block bg-white px-2 text-xs font-medium text-[#60378B]">Amount</label>
      <input v-model="localAmount" type="number" name="name" id="name" min="300" max="7200" :class="{'border-red-500': errorMessage}" class="block w-full rounded-md border border-[#60378B] py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none" placeholder="300" style="appearance: none;">
      <span v-if="errorMessage" class="text-red-500 text-xs">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps(["amount"])

const emits = defineEmits(['update:amount', 'update:isDisabled'])

const localAmount = ref(props.amount)
const errorMessage = ref("")

const rangeBackground = computed(() => {
  const percentage = ((localAmount.value - 300) / (7200 - 300)) * 100
  return {
    background: `linear-gradient(to right, black ${percentage}%, #e5e7eb ${percentage}%)`
  }
})

watch(localAmount, (newValue) => {
  if (newValue < 300 || newValue > 7200) {
    errorMessage.value = "This value should be between 300 and 7200"
    emits('update:isDisabled', true)
  } else {
    errorMessage.value = ""
    emits('update:isDisabled', false)
  }
  emits('update:amount', newValue)
})
</script>
