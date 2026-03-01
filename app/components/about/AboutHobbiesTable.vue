<script setup lang="ts">
type HobbyStatus = "Active" | "Paused" | "Planned"

type HobbyRow = {
  focus?: string
  interest: string
  status: HobbyStatus
}

const hobbies: HobbyRow[] = [
  { interest: "Programming", status: "Active", focus: "[[Redacted]]" },
  {
    interest: "Gaming",
    status: "Active",
    focus: "Reaching Master in League of Legends",
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
    focus: "Bulking and building muscle",
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
    focus: 'Nude makeup ("you but better")',
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
]

const statusClassMap: Record<HobbyStatus, string> = {
  Active:
    "border-green-200 bg-green-50 text-green-700 rounded-lg dark:border-green-900/80 dark:bg-green-950/50 dark:text-green-300",
  Paused:
    "border-amber-200 bg-amber-50 text-amber-700 rounded-lg dark:border-amber-900/80 dark:bg-amber-950/50 dark:text-amber-300",
  Planned:
    "border-blue-200 bg-blue-50 text-blue-700 rounded-lg dark:border-blue-900/80 dark:bg-blue-950/50 dark:text-blue-300",
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
            <Badge
              variant="outline"
              :class="`w-20 justify-center ${statusClassMap[hobby.status]}`"
            >
              {{ hobby.status }}
            </Badge>
          </TableCell>

          <TableCell class="text-muted-foreground px-4 py-2">
            {{ hobby.focus || " " }}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
