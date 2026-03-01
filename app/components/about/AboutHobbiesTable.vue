<script setup lang="ts">
type HobbyStatus = "Active" | "Paused" | "Planned"

type HobbyRow = {
  focus?: string
  interest: string
  status: HobbyStatus
}

const hobbies: HobbyRow[] = [
  {
    interest: "Programming",
    status: "Active",
    focus: "LLMs, Cloud, Observability",
  },
  {
    interest: "Gaming",
    status: "Active",
    focus: "Reaching Master (Top <1%) in League of Legends",
  },
  { interest: "Anime & Manga", status: "Paused" },
  { interest: "TV & Movies", status: "Paused" },
  {
    interest: "Music",
    status: "Active",
    focus: "Exploring new genres and artists, and considering piano",
  },
  {
    interest: "Books",
    status: "Active",
    focus: "Reading non-fiction technical books",
  },
  {
    interest: "Fitness",
    status: "Active",
    focus: "Strength training and muscle building",
  },
  {
    interest: "Photography",
    status: "Active",
    focus: "Environment photos, editorial photos and portraits",
  },
  {
    interest: "Video Editing",
    status: "Active",
    focus: "Short-form videos and small movies",
  },
  {
    interest: "Makeup",
    status: "Active",
    focus: "Nude makeup",
  },
  {
    interest: "Fashion",
    status: "Active",
    focus: "Rebuilding my whole wardrobe",
  },
  {
    interest: "Perfumes",
    status: "Active",
    focus: "Finding scents for different occasions and testing new perfumes",
  },
  { interest: "Digital Drawing", status: "Paused" },
  { interest: "Cooking", status: "Planned" },
  { interest: "Interior Design", status: "Planned" },
]

const statusClassMap: Record<HobbyStatus, string> = {
  Active: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100",
  Paused: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
  Planned: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100",
}
</script>

<template>
  <div class="my-5 overflow-hidden rounded-lg">
    <Table class="text-sm">
      <TableHeader
        class="bg-card [&_tr]:border-neutral-200 dark:[&_tr]:border-neutral-800"
      >
        <TableRow class="hover:bg-transparent">
          <TableHead class="h-10 px-4 py-2 font-semibold">Interest</TableHead>
          <TableHead class="h-10 px-4 py-2 font-semibold">Status</TableHead>
          <TableHead class="h-10 px-4 py-2 font-semibold">
            Current Focus
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow
          v-for="hobby in hobbies"
          :key="hobby.interest"
          class="border-neutral-200/80 hover:bg-white/60 dark:border-zinc-800 dark:hover:bg-zinc-900/50"
        >
          <TableCell class="px-4 py-2 font-medium">
            {{ hobby.interest }}
          </TableCell>

          <TableCell class="px-4 py-2">
            <span
              :class="[
                'inline-flex w-20 items-center justify-center rounded-lg px-3 py-1 text-xs font-semibold',
                statusClassMap[hobby.status],
              ]"
            >
              {{ hobby.status }}
            </span>
          </TableCell>

          <TableCell class="text-muted-foreground px-4 py-2">
            {{ hobby.focus || " " }}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
