import { Octokit } from "octokit"
import type { RepositoryResponse } from "~/types/github"

export const useGitHub = () => {
  const config = useRuntimeConfig()
  const octokit = new Octokit({
    auth: config.githubToken,
  })

  async function fetchRepository(
    repository: string,
    owner: string = "Dino-Kupinic",
  ): Promise<RepositoryResponse> {
    return await octokit.request("GET /repos/{owner}/{repo}", {
      owner: owner,
      repo: repository,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
  }

  return { fetchRepository }
}
