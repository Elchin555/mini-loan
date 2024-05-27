<script setup>
import ResultCard from '@/components/ResultCard.vue';
import {useLoanStore} from "@/stores/loanStore"

const loanStore=useLoanStore()

const user = {
  firstName: loanStore.userName,
}

const result = {
  message: {
    label: `Page missing`,
    description: 'We couldn’t find the page you’re looking for.',
  },
  link: {
    name: 'home',
    label: 'Go to home page'
  },
  isPositive: false
}
</script>

<template>
  <div class="p-4 bg-white md:bg-secondary-bg">
    <ResultCard :result="result">
      <img class=" max-h-48" src="@/assets/sad-document.svg" alt="">
    </ResultCard>
  </div>
</template>
