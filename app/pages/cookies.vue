<script setup lang="ts">
const change = () => {
  localStorage.removeItem("va-disable")
  window.location.reload()
}
</script>

<template>
  <GenericLayoutWrapper>
    <ContentDoc path="/cookies" />
    <Button @click="change">Change Preferences</Button>
  </GenericLayoutWrapper>
</template>
