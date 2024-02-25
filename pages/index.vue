<script setup lang="ts">
useSeoMeta({
  title: "Dino Kupinic",
  ogTitle: "Dino Kupinic",
  description: "This is my amazing site.",
  ogDescription: "This is my amazing site.",
})
</script>

<template>
  <main class="w-screen h-screen flex">
    <Card class="w-[400px] h-[225px] m-auto">
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
</template>