import { inject } from "@vercel/analytics"

export default defineNuxtPlugin(() => {
  inject({
    beforeSend: (event) => {
      if (localStorage.getItem("va-disable")) {
        return null
      }
      return event
    },
    debug: false,
  })
})
