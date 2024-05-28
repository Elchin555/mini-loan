<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps([
  "selectedIndex",
  "selectedPeriod",
  "months"
])

const emits = defineEmits(['update:selectedIndex', 'update:selectedPeriod'])

const localSelectedIndex = ref(props.selectedIndex)
const localSelectedPeriod = ref(props.selectedPeriod)

watch(localSelectedIndex, (newValue) => {
  emits('update:selectedIndex', newValue)
  localSelectedPeriod.value = props.months[newValue]
})

watch(localSelectedPeriod, (newValue) => {
  emits('update:selectedPeriod', newValue)
  localSelectedIndex.value = props.months.indexOf(newValue)
})

const rangePeriodBackground = computed(() => {
  const percentage = (localSelectedIndex.value / (props.months.length - 1)) * 100
  return {
    background: `linear-gradient(to right, black ${percentage}%, #e5e7eb ${percentage}%)`
  }
})
</script>

<template>
  <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 justify-center">
    <div class="w-full md:w-2/3 flex flex-col space-y-2">
      <input v-model="localSelectedIndex" id="period-range" type="range" :min="0" :max="months.length - 1" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" :style="rangePeriodBackground">
      <div class="flex items-center justify-between text-[#21093A] text-sm">
        <span>2 months</span>
        <span>72 months</span>
      </div>
    </div>
    <div class="w-full md:w-1/3 relative">
      <label for="location" class="absolute -top-2 left-2 rounded-md inline-block bg-white px-2 text-xs font-medium text-[#60378B]">Period</label>
      <select v-model="localSelectedPeriod" class="dropDown w-full p-2 border border-[#60378B] rounded-md focus:outline-none bg-white">
        <option v-for="option in months" :key="option" :value="option">{{ option }} months</option>
      </select>
    </div>
  </div>
</template>