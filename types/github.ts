import type { Endpoints } from "@octokit/types"

export type RepositoryResponse =
  Endpoints["GET /repos/{owner}/{repo}"]["response"]
