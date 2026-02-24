<script setup lang="ts">
const props = defineProps<{
  id: string
  name: string
  description?: string | null
  image?: string | null
  priceAmount?: number | null
}>()

const creator = {
  name: "Dino Kupinic",
  avatar: "https://github.com/Dino-Kupinic.png",
}

const formattedPrice = computed(() =>
  props.priceAmount && props.priceAmount > 0
    ? new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(props.priceAmount / 100)
    : "Free",
)

const priceBadgeClass = computed(() =>
  props.priceAmount && props.priceAmount > 0
    ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
    : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100",
)

const buyNow = () => {
  const customerId = sessionStorage.getItem("customerId")
  const customerEmail = sessionStorage.getItem("customerEmail")
  const customerName = sessionStorage.getItem("customerName")
  const url = new URL("/api/checkout", window.location.origin)

  url.searchParams.append("products", props.id)
  if (customerId) {
    url.searchParams.append("customerId", customerId)
  }
  if (customerEmail) {
    url.searchParams.append("customerEmail", customerEmail)
  }
  if (customerName) {
    url.searchParams.append("customerName", customerName)
  }
  window.location.href = url.toString()
}
</script>

<template>
  <Card
    class="group h-full min-h-68 gap-0 overflow-hidden rounded-lg py-0 sm:min-h-110"
    @click="buyNow"
  >
    <CardHeader class="flex items-center justify-center p-0">
      <div
        class="from-background to-accent dark:to-muted relative flex h-32 w-full items-center justify-center overflow-hidden bg-linear-to-t sm:h-64"
      >
        <NuxtImg
          v-if="props.image"
          :src="props.image"
          :alt="props.name"
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Icon
          v-else
          name="i-heroicons-shopping-bag"
          size="48"
          class="text-foreground/70"
        />
      </div>
    </CardHeader>

    <CardContent
      class="border-border flex flex-1 flex-col border-t px-2.5 py-2.5 sm:px-4 sm:py-3"
    >
      <CardTitle class="text-foreground line-clamp-3 text-sm sm:text-lg">
        {{ props.name }}
      </CardTitle>
      <!--      <CardDescription-->
      <!--        class="text-foreground/90 dark:text-secondary mt-1 line-clamp-2 text-sm leading-5 sm:text-base sm:leading-6"-->
      <!--      >-->
      <!--        {{ props.description || "No description provided." }}-->
      <!--      </CardDescription>-->

      <div
        class="mt-3 inline-flex w-fit items-center gap-2 text-xs underline decoration-dotted underline-offset-4 hover:opacity-80 sm:text-sm"
      >
        <Avatar class="size-5 border sm:size-6">
          <AvatarImage :src="creator.avatar" alt="creator avatar" />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
        <span>{{ creator.name }}</span>
      </div>
    </CardContent>

    <CardFooter class="mt-auto p-0">
      <div class="border-border w-full border-t px-2.5 py-2 sm:px-4 sm:py-3">
        <span
          :class="[
            'rounded-lg px-3 py-0.5 text-base font-semibold',
            priceBadgeClass,
          ]"
        >
          {{ formattedPrice }}
        </span>
      </div>
    </CardFooter>
  </Card>
</template>
