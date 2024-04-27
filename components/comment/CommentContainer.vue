<script setup lang="ts">
// import { parseMarkdown } from "@nuxtjs/mdc/runtime"
//
// const ast = await useAsyncData("markdown", () =>
//   parseMarkdown("::alert\nMissing markdown input\n::"),
// )
</script>

<template>
  <div class="my-3 rounded-lg border bg-background p-4">
    <Tabs default-value="write">
      <div class="w-64">
        <TabsList class="grid w-full grid-cols-2">
          <TabsTrigger value="write">{{ $t("comments.write") }}</TabsTrigger>
          <TabsTrigger value="preview">
            {{ $t("comments.preview") }}
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="write">
        <Textarea
          class="max-h-72 w-full"
          :placeholder="$t('comments.placeholder')"
        />
      </TabsContent>
      <TabsContent value="preview">
        <!--        <MDCRenderer :body="ast.body" :data="ast.data" />-->
      </TabsContent>
    </Tabs>
  </div>
</template>
