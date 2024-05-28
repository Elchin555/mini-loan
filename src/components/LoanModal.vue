<script setup>
import LoanForm from '@/components/LoanForm.vue';
import { useLoanStore } from "@/stores/loanStore.js"

const loanStore = useLoanStore()
const closeModal = () => {
  loanStore.showLoanModal = false
}

</script>
<template>
  <transition name="overlay">
    <div class="fixed inset-0 z-50 bg-black/50 flex justify-center items-end md:items-center">
      <div role="dialog" class="p-6 md:p-10 gap-6 w-full max-w-xl flex flex-col bg-white rounded-[30px] rounded-b-none md:rounded-b-[30px]">
        <div class="flex items-center justify-between">
          <h3 class="text-xl">Personal details</h3>
          <button @click="closeModal">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M13 1L1 13" stroke="#21093A" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <LoanForm />
      </div>
    </div>
</transition>
</template>

<style scoped>
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

</style>
