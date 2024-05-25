<script setup>
import CalculatorContainer from "@/components/CalculatorContainer.vue";
import LoanModal from "@/components/LoanModal.vue"
import {ref} from "vue"
const isDisabled=ref(false)
const showLoanModal=ref(true)

</script>
<template>
    <div class="space-y-10">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 px-6 md:px-10 py-4">
            <div class="flex flex-col col-span-2 space-y-4 justify-center items-center bg-[#D9D4A7] px-10 py-20 rounded-[100px] md:rounded-[200px] order-2 md:order-1">
                <span>Mini loan</span>
                <h1 class="text-3xl md:text-5xl italic text-center">Take charge of unexpected costs</h1>
                <p class="text-center">Finance unforeseen expenses with Inbank. A quick and easy application process with an instant credit decision.</p>
                <div class="flex justify-center">
                    <button class="px-6 py-3 rounded-full bg-[#F0F0EA]">
                        Apply Now
                    </button>
                </div>
            </div>

            <div class="rounded-[100px] md:rounded-[200px] overflow-hidden col-span-3  md:flex order-1 md:order-2">
                <img src="@/assets/homePic.png" alt="">
            </div>
        </div>
      <calculator-container/>
    </div>
    <LoanModal v-if="showLoanModal"/>
    <!-- <div class=" flex justify-center">
        <button class="btn rounded px-4 py-2" :disabled="isDisabled">Button</button>
    </div> -->
</template>