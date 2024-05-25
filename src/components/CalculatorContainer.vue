<script setup>
import CalculatorMain from "@/components/CalculatorMain.vue";


</script>


<template>
   <div class="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 p-6 md:p-10 bg-[#E3D2FF]">
            <div class="w-full md:w-1/2 mx-auto flex flex-col justify-center space-y-3">
                <h3 class="text-3xl md:text-5xl md:text-center">Calculate your monthly payment</h3>
                <p class="md:text-center">Estimate your monthly payments based on the chosen loan amount and time period.</p>
            </div>
            <calculator-main/>
        </div>
</template>
