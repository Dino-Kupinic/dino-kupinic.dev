import type { ProjectQuery } from "~/types/query"

export const useProject = () => {
  const route = useRoute()

  return useAsyncData<ProjectQuery | null>(`project-${route.path}`, () =>
    queryCollection("projects").path(route.path).first(),
  )
}
