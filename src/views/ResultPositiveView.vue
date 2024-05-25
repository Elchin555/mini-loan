<script setup>
import ResultCard from '@/components/ResultCard.vue';

const user = {
  firstName: "Anna",
  lastName: 'Ivanovna',
  mobileNumber: '557778899',
  emailAddress: 'aaaa@mail.com',
  monthlyIncome: 600
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
  <div class="p-4">
    <ResultCard :result="result">
      <p class="py-3 text-center opacity-75">
        In addition to your income and expenses, a number of other factors play a role in loan decisions.
      </p>
    </ResultCard>
  </div>
</template>
