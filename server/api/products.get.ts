import { getPolarClient } from "../utils/polar"

export default defineEventHandler(async () => {
  const polar = getPolarClient()
  const products = await polar.products.list({ isArchived: false })
  return products?.result?.items ?? []
})
