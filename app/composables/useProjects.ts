import type { ProjectContent } from "~/types/project"

export const useProjects = () => {
  const route = useRoute()
  const projects = useState<ProjectContent[]>("projects", () => [])
  const featuredProjects = computed(() =>
    projects.value.filter((project) => project.featured),
  )

  async function fetchProjects() {
    if (projects.value.length) return

    try {
      projects.value = await queryContent<ProjectContent>("/project")
        .sort({ date: -1 })
        .find()
    } catch (error) {
      projects.value = []
      return error
    }
  }

  async function fetchProject() {
    const { data } = await useAsyncData(route.path, () =>
      queryContent<ProjectContent>(route.path).findOne(),
    )
    return data
  }

  return {
    projects,
    featuredProjects,
    fetchProjects,
    fetchProject,
  }
}
