<script setup lang="ts">
const { data } = useFetch("/api/products")
console.log(data.value)
</script>

<template>
  <GenericLayoutWrapper>
    <header class="mt-8 flex w-full flex-col gap-2 py-5 sm:mt-16">
      <PageTitle>Shop</PageTitle>
      <h2
        class="bg-green-100 p-1.5 text-center font-mono text-xl font-normal tracking-tight text-green-600 italic dark:bg-green-800 dark:text-green-200"
      >
        LOOKING FOR [Irresistible Deals] THAT WILL [Blow Your Mind!?]
      </h2>
      <h2
        class="bg-red-100 p-1.5 text-center font-mono text-xl font-normal tracking-tight text-red-500 italic dark:bg-red-800 dark:text-red-200"
      >
        AN AWESOME PRICE.! AN ABSOLUTELY [[Terrifying]] PRICE
      </h2>
      <h2
        class="bg-blue-100 p-1.5 text-center font-mono text-xl font-normal tracking-tight text-yellow-500 italic dark:bg-yellow-800 dark:text-yellow-200"
      >
        I JUST NEED YOUR [Account Details] AND THE [Number on theB4ck]!
      </h2>
      <h2
        class="bg-blue-100 p-1.5 text-center font-mono text-xl font-normal tracking-tight text-blue-500 italic dark:bg-blue-800 dark:text-blue-200"
      >
        YOU HAVE TOO MUCH MONEY
      </h2>
      <h2
        class="bg-blue-100 p-1.5 text-center font-mono text-xl font-normal tracking-tight text-purple-500 italic dark:bg-purple-800 dark:text-purple-200"
      >
        TAKE THE DEAL YOU LITTLE [Sponge]
      </h2>
    </header>

    <ProductCatalog :products="data" />
  </GenericLayoutWrapper>
</template>

<style scoped></style>
