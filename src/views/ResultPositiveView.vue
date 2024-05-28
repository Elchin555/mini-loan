<script setup>
import ResultCard from '@/components/ResultCard.vue';
import {useLoanStore} from "@/stores/loanStore"

const loanStore=useLoanStore()

const userLoanInfo = {
   amount:loanStore.loanDetails.amount || null,
   period:loanStore.loanDetails.period || null,
   monthlyPayment:loanStore.loanDetails.monthlyPayment || null
}

const result = {
  message: {
    label: 'Good news!',
    description: 'Your loan has been approved',
  },
  link: {
    name: 'home',
    label: 'Back to home page'
  },
  isPositive: true
}
</script>

<template>
  <div class="p-4 bg-white md:bg-secondary-bg">
    <ResultCard :result="result">
      <div class="py-3 grid grid-cols-3">
        <p class="col-span-2">Loan amount</p>
        <p>{{ userLoanInfo?.amount }}</p>
      </div>
      <div class="py-3 grid grid-cols-3">
        <p class="col-span-2">Loan period</p>
        <p>{{ userLoanInfo?.period }} months</p>
      </div>
      <div class="py-3 grid grid-cols-3">
        <p class="col-span-2">Monthly Payment</p>
        <p>{{ userLoanInfo?.monthlyPayment }} €</p>
      </div>
    </ResultCard>
  </div>
</template>
