export type ProjectQuery = NonNullable<
  Awaited<ReturnType<ReturnType<typeof queryCollection<"projects">>["first"]>>
>

export const useProjects = async () => {
  const route = useRoute()
  const { data: projects } = await useAsyncData<ProjectQuery[]>(
    "projects",
    () => queryCollection("projects").order("date", "DESC").all(),
  )

  async function fetchProject() {
    const { data } = await useAsyncData(route.path, () => {
      return queryCollection("projects").path(route.path).first()
    })
    return data
  }

  const featuredProjects = computed(() =>
    (projects.value ?? []).filter((project) => project.featured),
  )

  return {
    projects,
    featuredProjects,
    fetchProject,
  }
}
