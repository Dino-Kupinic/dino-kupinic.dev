import { getPolarClient } from "../utils/polar"

const withCheckoutIdParam = (urlString: string) => {
  let url: URL
  try {
    url = new URL(urlString)
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "POLAR_SUCCESS_URL must be an absolute URL",
    })
  }

  if (!url.searchParams.has("checkout_id")) {
    url.searchParams.set("checkout_id", "{CHECKOUT_ID}")
  }

  return url.toString()
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const polar = getPolarClient()
  const config = useRuntimeConfig()
  const configuredSuccessUrl = config.polarSuccessUrl
  const successUrl = configuredSuccessUrl
    ? withCheckoutIdParam(configuredSuccessUrl)
    : null
  if (!successUrl) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing POLAR_SUCCESS_URL runtime config",
    })
  }
  const checkout = await polar.checkouts.create({
    products: [query.products as string],
    successUrl,
    customerEmail: query.customerEmail as string | undefined,
  })
  return sendRedirect(event, checkout.url)
})
