<script setup lang="ts"></script>

<template>
  <div>
    <FeaturedBlogsContainer class="m-auto my-4 sm:my-5" />
    <main>
      <ContentList v-slot="{ list }" path="/blogs">
        <div
          v-for="article in list"
          :key="article._path"
          class="my-2 border p-3"
        >
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
        </div>
      </ContentList>
    </main>
  </div>
</template>
