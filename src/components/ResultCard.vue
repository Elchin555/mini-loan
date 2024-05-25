<script lang="ts" setup>
defineProps({
  result: { type: Object }
})

</script>

<template>
  <div 
    class="flex flex-col gap-6 md:flex-row md:rounded-[20px]  mx-auto custom-shadow"
    :class="[result.isPositive ? 'max-w-[1200px] min-h-[400px] lg:min-h-[550px]' : 'max-w-[800px] min-h-[500px]']"
  >
    <div v-if="result.isPositive" class="md:basis-1/2">
      <div class="p-8 md:py-10 md:px-0 bg-[#F0F0EA] md:border-4 border-white w-[240px] md:w-full h-[240px] md:h-full rounded-[40px] md:rounded-l-[20px] md:rounded-r-none mx-auto">
        <img 
          class="relative md:left-[20px] lg:left-[60px] w-full h-full" 
          src="@/assets/result-positive.png" 
          alt=""
        >
      </div>

    </div>
    <div class="flex flex-col gap-6 md:gap-10 md:basis-1/2 md:max-w-96 md:m-auto">
      <div class="text-center space-y-2">
        <h1 class="text-2xl md:text-5xl italic leading-8 font-bitter">{{ result.message.label }}</h1>
        <p>{{ result.message.description }}</p>
      </div>
      <div class="flex flex-col border-y divide-y">
        <slot></slot>
      </div>
      <RouterLink :to="{ name: result.link.name }" class="px-6 py-3 text-center rounded-full bg-[#AA93FF]">
        {{ result.link.label }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&display=swap');

.font-bitter {
  font-family: "Bitter", serif;
}

.custom-shadow {
  box-shadow: 0px 0px 40px 0px #0000000A;
}
</style>