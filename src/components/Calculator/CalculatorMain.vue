
<script setup>
import MonthlyPayment from "@/components/Calculator/MonthlyPayment.vue"
import PeriodInput from "@/components/Calculator/PeriodInput.vue"
import AmountInput from "@/components/Calculator/AmountInput.vue"
import { ref, computed } from 'vue'
import { useLoanStore } from "@/stores/loanStore"

const loanStore = useLoanStore()

const amount = ref(300)
const months = [2, 4, 5, 6, 9, 12, 15, 18, 21, 24, 30, 36, 42, 48, 54, 60, 66, 72]
const isDisabled = ref(false)
const selectedIndex = ref(0)
const selectedPeriod = ref(months[0])

const monthlyPayment = computed(() => {
  if (amount.value < 300 || amount.value > 7200) {
    return "-"
  }
  return (amount.value / selectedPeriod.value).toFixed(2)
})

const calcLoan = () => {
  loanStore.checkLoanCalculate(amount.value, selectedPeriod.value, monthlyPayment.value)
  loanStore.showLoanModal = true
}
</script>

<template>
  <div class="flex flex-col gap-10 w-full">
    <AmountInput
      :amount="amount"
      @update:amount="value => amount = value"
      @update:isDisabled="value => isDisabled = value"
    />

    <PeriodInput
      :selectedIndex="selectedIndex"
      :selectedPeriod="selectedPeriod"
      :months="months"
      @update:selectedIndex="value => selectedIndex = value"
      @update:selectedPeriod="value => selectedPeriod = value"
    />

    <MonthlyPayment :monthlyPayment="monthlyPayment" />
    <button class="btn mt-4 text-black" @click="calcLoan" :disabled="isDisabled"><span>Apply now</span></button>
    <p class="text-[12px] opacity-60">
      The calculation is approximate and may differ from the conditions offered to you.
      Please submit a loan application to receive a personal offer. Financial services are provided by AS Inbank Finance.
    </p>
  </div>
</template>
