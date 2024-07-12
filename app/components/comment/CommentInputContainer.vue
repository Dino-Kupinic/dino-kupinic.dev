<script setup lang="ts">
const text = ref<string>("")
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
          v-model="text"
          class="max-h-72 w-full"
          :placeholder="$t('comments.placeholder')"
        />
      </TabsContent>
      <TabsContent value="preview">
        <Textarea v-model="text" class="max-h-72 w-full" />
      </TabsContent>
    </Tabs>
    <div class="mt-2 flex w-full">
      <Button class="px-5" :disabled="!text.trim().length">
        {{ $t("comments.submit") }}
      </Button>
    </div>
  </div>
</template>
