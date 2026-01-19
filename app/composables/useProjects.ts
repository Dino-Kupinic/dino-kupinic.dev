export type ProjectQuery = NonNullable<
  Awaited<ReturnType<ReturnType<typeof queryCollection<"projects">>["first"]>>
>

export const useProjects = () => {
  const route = useRoute()
  const projects = useState<ProjectQuery[]>("projects", () => [])

  async function fetchProjects() {
    if (projects.value.length) return

    try {
      projects.value = await queryCollection("projects")
        .order("date", "DESC")
        .all()
    } catch (error) {
      projects.value = []
      return error
    }
  }

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
    fetchProjects,
  }
}
