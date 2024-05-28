<script setup>
import CalculatorMain from "@/components/Calculator/CalculatorMain.vue";

</script>


<template>
  <section 
    id="calculator-container"
    class="py-10 px-4 md:py-20 md:px-10 flex flex-col md:flex-row gap-10 bg-primary-bg"
  >
    <div class="md:px-10 w-full flex flex-col md:justify-center gap-2 md:gap-4 md:*:text-center font-bitter">
      <h2 class="text-3xl md:text-5xl lg:text-7xl">
        Calculate your <br class="md:hidden">
        <span class="italic">monthly payment</span>
      </h2>
      <p>Estimate your monthly payments based on the chosen loan amount and time period.</p>
    </div>
    <span id="divider" class="hidden md:block w-[1px] opacity-15 bg-[#21093A]"></span>
    <CalculatorMain />
  </section>
</template>
