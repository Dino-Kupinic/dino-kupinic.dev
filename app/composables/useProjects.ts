import type { ProjectQuery } from "~/types/query"

export const useProjects = () => {
  const { data, pending, error } = useAsyncData<ProjectQuery[]>(
    "projects",
    () => queryCollection("projects").order("date", "DESC").all(),
  )

  const featuredProjects = computed(() =>
    (data.value ?? []).filter((project) => project.featured),
  )

  return {
    projects: data,
    featuredProjects,
    pending,
    error,
  }
}
