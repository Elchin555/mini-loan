<script setup>
import { ref, watch, computed } from 'vue'
import {useLoanStore} from "@/stores/loanStore"
const loanStore=useLoanStore()

const amount = ref(300)
const months = [4, 5, 6, 9, 12, 15, 18, 21, 24, 30, 36, 42, 48, 54, 60, 66, 72]

const selectedIndex = ref(0)
const selectedPeriod = ref(months[0])

const errorMessage = ref("")

watch(selectedIndex, (newValue) => {
  selectedPeriod.value = months[newValue]
})

watch(selectedPeriod, (newValue) => {
  selectedIndex.value = months.indexOf(newValue)
})

const rangeBackground = computed(() => {
  const percentage = ((amount.value - 300) / (7200 - 300)) * 100
  return {
    background: `linear-gradient(to right, black ${percentage}%, #e5e7eb ${percentage}%)`
  }
})

const rangePeriodBackground = computed(() => {
  const percentage = (selectedIndex.value / (months.length - 1)) * 100
  return {
    background: `linear-gradient(to right, black ${percentage}%, #e5e7eb ${percentage}%)`
  }
})

const monthlyPayment = computed(() => {
  if (amount.value < 300 || amount.value > 7200) {
    return "-"
  }
  return (amount.value / selectedPeriod.value).toFixed(2)
})

watch(amount, (newValue) => {
  if (newValue < 300 || newValue > 7200) {
    errorMessage.value = "This value should be between 2000 and 50000"
  } else {
    errorMessage.value = ""
  }
})
const loanCalculate=()=>{
  loanStore.checkLoanCalculate(amount.value,selectedPeriod.value,monthlyPayment.value)
  loanStore.showLoanModal=true
}
</script>

<template>
  <div class="flex flex-col gap-10 w-full">
    <!-- Input for Amount -->
    <div class="flex flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-6">
      <div class="w-full md:w-2/3 flex flex-col space-y-2">
        <input v-model="amount" id="amount-range" min="300" max="7200" type="range" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" :style="rangeBackground">
        <div class="flex items-center justify-between text-[#21093A] text-sm mt-6">
          <span>300 €</span>
          <span>7,200 €</span>
        </div>
      </div>
      <div class="w-full md:w-1/3 relative">
        <label for="name" class="absolute -top-2 left-2 rounded-md inline-block bg-white px-2 text-xs font-medium text-[#60378B]">Amount</label>
        <input v-model="amount" type="number" name="name" id="name" min="300" max="7200" :class="{'border-red-500': errorMessage}" class="block w-full rounded-md border border-[#60378B] py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none" placeholder="300" style="appearance: none;">
        <span v-if="errorMessage" class="text-red-500 text-xs">{{ errorMessage }}</span>
      </div>
    </div>
    <!-- Input for Period -->
    <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 justify-center">
      <div class="w-full md:w-2/3 flex flex-col space-y-2  ">
        <input v-model="selectedIndex" id="period-range" type="range" :min="0" :max="months.length - 1" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer " :style="rangePeriodBackground">
        <div class="flex items-center justify-between text-[#21093A] text-sm">
          <span>2 months</span>
          <span>72 months</span>
        </div>
      </div>
      <div class="w-full md:w-1/3 relative">
        <label for="location" class="absolute -top-2 left-2 rounded-md inline-block bg-white px-2 text-xs font-medium text-[#60378B]">Period</label>
        <select v-model="selectedPeriod" class="w-full p-2 border border-[#60378B] rounded-md focus:outline-none bg-white">
          <option v-for="option in months" :key="option" :value="option">{{ option }} months</option>
        </select>
      </div>
    </div>

    <!-- Monthly Payment Section -->
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2 items-center">
        <p>Monthly payment</p>
        <p class="text-4xl md:text-7xl font-bitter">{{ monthlyPayment }}€</p>
        <button class="btn mt-4" @click="loanCalculate">Apply now</button>
      </div>
      <p class="text-[12px] opacity-60">
        The calculation is approximate and may differ from the conditions offered to you.
        Please submit a loan application to receive a personal offer. Financial services are provided by AS Inbank Finance.
      </p>
    </div>
  </div>
</template>

<style scoped>
input[type='range'] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: #e5e7eb; /* gray-200 color from Tailwind CSS */
  border-radius: 5px;
  outline: none;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 52px; /* Width of the custom SVG */
  height: 36px; /* Height of the custom SVG */
  background: url('data:image/svg+xml,%3Csvg width="52" height="36" viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="52" height="36" rx="18" fill="%23AA93FF"/%3E%3Cpath d="M24 18L16 18" stroke="%2321093A"/%3E%3Cpath d="M21 13L16 18L21 23" stroke="%2321093A"/%3E%3Cpath d="M28 18L36 18" stroke="%2321093A"/%3E%3Cpath d="M31 13L36 18L31 23" stroke="%2321093A"/%3E%3C/svg%3E') no-repeat center;
  cursor: pointer;
  border-radius: 18px; /* Match the radius of the SVG */
  border: none; /* Remove border for cleaner look */
  transition: box-shadow 0.2s ease; /* Add transition for smooth shadow effect */
}

input[type='range']:hover::-webkit-slider-thumb {
  background-color: #BBA8FF; /* btn-hovered color */
  box-shadow: 0 0 7px #BBA8FF; /* Shadow on hover */
}

input[type='range']:focus::-webkit-slider-thumb {
  background-color: #BBA8FF; /* btn-focused color */
  box-shadow: 0 0 10px #BBA8FF /* Shadow on focus */
}

input[type='range']:active::-webkit-slider-thumb {
  background-color: #9F85FF; /* btn-pressed color */
  box-shadow: 0 0 15px #BBA8FF; /* Shadow on active/click */
}

input[type='range']:disabled::-webkit-slider-thumb {
  background-color: #DEDEDE; /* btn-disabled color */
}

input[type='range']::-moz-range-thumb {
  width: 52px; /* Width of the custom SVG */
  height: 36px; /* Height of the custom SVG */
  background: url('data:image/svg+xml,%3Csvg width="52" height="36" viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="52" height="36" rx="18" fill="%23AA93FF"/%3E%3Cpath d="M24 18L16 18" stroke="%2321093A"/%3E%3Cpath d="M21 13L16 18L21 23" stroke="%2321093A"/%3E%3Cpath d="M28 18L36 18" stroke="%2321093A"/%3E%3Cpath d="M31 13L36 18L31 23" stroke="%2321093A"/%3E%3C/svg%3E') no-repeat center;
  cursor: pointer;
  border-radius: 18px; /* Match the radius of the SVG */
  border: none; /* Remove border for cleaner look */
  transition: box-shadow 0.2s ease; /* Add transition for smooth shadow effect */
}

input[type='range']:hover::-moz-range-thumb {
  background-color: #BBA8FF; /* btn-hovered color */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Shadow on hover */
}

input[type='range']:focus::-moz-range-thumb {
  box-shadow: 0 0 0 0.5rem rgba(170, 147, 255, 0.12);
}

input[type='range']:active::-moz-range-thumb {
  background-color: #9F85FF; /* btn-pressed color */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); /* Shadow on active/click */
}

input[type='range']:disabled::-moz-range-thumb {
  background-color: #DEDEDE; /* btn-disabled color */
}
</style>
