<script setup lang="ts">
useSeoMeta({
  title: "Dino Kupinic",
  ogTitle: "Dino Kupinic",
  description: "This is my amazing site.",
  ogDescription: "This is my amazing site.",
})
</script>

<template>
  <div class="relative h-screen w-screen">
    <NuxtImg class="absolute inset-0 h-full w-full bg-no-repeat bg-cover" src="/background-dinokupinic-maintenance.jpg" />
    <main class="absolute inset-0 flex items-center justify-center">
      <Card class="w-[400px] h-[225px]">
        <CardHeader>
          <CardTitle>🚀 in development</CardTitle>
          <CardDescription>Any questions?</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <Icon name="i-material-symbols-alternate-email-rounded"/>
            dinokupinic2006@gmail.com
          </p>
          <p>
            <Icon name="i-skill-icons-discord"/>
            yuzzuwo
          </p>
        </CardContent>
        <CardFooter>
          <p>
            In the meantime, you can checkout my
            <NuxtLink to="https://github.com/Dino-Kupinic">
              <Icon name="i-mdi-github"/>
            </NuxtLink>
          </p>
        </CardFooter>
      </Card>
    </main>
  </div>
</template>
