<script setup>
import {ref} from "vue"
const isDisabled=ref(false)

</script>
<template>
    <div class=" flex justify-center">
        <button class="btn rounded px-4 py-2" :disabled="isDisabled">Button</button>
    </div>
</template>