<script setup>
import TheHero from "@/components/TheHero.vue";
import CalculatorContainer from "@/components/CalculatorContainer.vue";
import LoanModal from "@/components/LoanModal.vue"

import { useLoanStore } from "@/stores/loanStore"
const loanStore = useLoanStore()

</script>

<template>
  <div>
    <TheHero />
    <CalculatorContainer />
  </div>
  <LoanModal v-if="loanStore.showLoanModal"/>
</template>