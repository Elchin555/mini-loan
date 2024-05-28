<script setup>
import ResultCard from '@/components/ResultCard.vue';
import {useLoanStore} from "@/stores/loanStore"

const loanStore=useLoanStore()
const user = {
  firstName: loanStore.userName,
}

const result = {
  message: {
    label: `Dear, ${user.firstName}`,
    description: 'Unfortunately, your loan was denied.',
  },
  link: {
    name: 'home',
    label: 'Exit'
  },
  isPositive: false
}
</script>

<template>
  <div class="p-4 bg-white md:bg-secondary-bg">
    <ResultCard :result="result">
      <p class="py-3 text-center opacity-75">
        In addition to your income and expenses, a number of other factors play a role in loan decisions.
      </p>
    </ResultCard>
  </div>
</template>
