<template>
  <div>
    <FeaturedBlogsContainer class="m-auto my-4 sm:my-5" />
    <main class="my-16 flex flex-col gap-4">
      <SectionHeading>{{ $t("blog.latest") }}</SectionHeading>
      <BlogTable />
      <!--      <div class="flex w-full">-->
      <!--        <Button class="w-full px-24 sm:w-auto">-->
      <!--          {{ $t("blog.loadMore") }}-->
      <!--        </Button>-->
      <!--      </div>-->
    </main>
  </div>
</template>
