<script setup>
const props = defineProps(["monthlyPayment"]);
</script>
<template>
  <div class="flex flex-col gap-2 items-center">
    <p>Monthly payment</p>
    <p class="text-4xl md:text-7xl font-bitter">{{ props.monthlyPayment }}€</p>
  </div>
</template>
