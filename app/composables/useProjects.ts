export type ProjectQuery = NonNullable<
  Awaited<ReturnType<ReturnType<typeof queryCollection<"projects">>["first"]>>
>

export const useProjects = () => {
  const route = useRoute()

  const { data: projects } = useAsyncData<ProjectQuery[]>("projects", () =>
    queryCollection("projects").order("date", "DESC").all(),
  )

  const { data: project } = useAsyncData<ProjectQuery | null>(
    `project-${route.path}`,
    () => queryCollection("projects").path(route.path).first(),
  )

  const featuredProjects = computed(() =>
    (projects.value ?? []).filter((project) => project.featured),
  )

  return {
    projects,
    featuredProjects,
    project,
  }
}
