<script setup>
import TheHero from "@/components/TheHero.vue";
import CalculatorContainer from "@/components/Calculator/CalculatorContainer.vue";
import LoanModal from "@/components/LoanModal.vue"
import { useModal } from '@/composables/useModal.js'

const { visible } = useModal()

</script>

<template>
  <div>
    <TheHero />
    <CalculatorContainer />
  </div>
  <LoanModal v-show="visible"/>
</template>