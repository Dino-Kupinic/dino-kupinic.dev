<script setup lang="ts"></script>

<template>
  <ContentLayoutWrapper>
    <GenericPageHeader
      :title="$t('uses.title')"
      :subtitle="$t('uses.subtitle')"
    />
    <main class="mt-8">
      <UsesDevicesSection />
    </main>
  </ContentLayoutWrapper>
</template>
