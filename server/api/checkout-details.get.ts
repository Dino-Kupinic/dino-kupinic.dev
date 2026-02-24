import { getPolarClient } from "../utils/polar"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const checkoutIdRaw = query.checkoutId ?? query.checkout_id ?? query.id
  const checkoutId = Array.isArray(checkoutIdRaw)
    ? checkoutIdRaw[0]
    : checkoutIdRaw
  if (!checkoutId) return { checkout: null, product: null }

  try {
    const polar = getPolarClient()
    const checkout = await polar.checkouts.get({ id: checkoutId })
    let product = checkout.product ?? null

    // Fallback for older payloads where only productId is available.
    if (!product && checkout.productId) {
      try {
        product = await polar.products.get({ id: checkout.productId })
      } catch {
        product = null
      }
    }

    return { checkout, product }
  } catch {
    return { checkout: null, product: null }
  }
})
