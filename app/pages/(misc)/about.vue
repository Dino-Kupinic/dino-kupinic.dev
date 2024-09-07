<script setup lang="ts"></script>

<template>
  <GenericLayoutWrapper>
    <GenericPageHeader
      :title="$t('about.title')"
      :subtitle="$t('about.subtitle')"
    />
    <main>
      <ContentDoc path="/about" />
    </main>
  </GenericLayoutWrapper>
</template>
