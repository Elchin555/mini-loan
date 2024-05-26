<script setup>
import LoanForm from '@/components/LoanForm.vue';
import {useLoanStore} from "@/stores/loanStore.js"

const loanStore=useLoanStore()

</script>
<template>
  <div class="w-screen h-screen fixed z-50 top-0 left-0 bg-black bg-opacity-50">
    <div class="flex md:items-center items-end justify-center w-full h-full">
      <div class="md:w-1/2 w-full flex flex-col bg-white rounded-[30px] rounded-b-[0] md:rounded-b-[30px] p-12 space-y-6">
        <div class="flex items-center justify-between">
          <h3 class="text-xl">Personal details</h3>
          <button @click="loanStore.showLoanModal=false">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M13 1L1 13" stroke="#21093A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <LoanForm />
      </div>
    </div>
  </div>
</template>


