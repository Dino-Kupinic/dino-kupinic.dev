import {
  allConsentNames,
  configureConsentManager,
  createConsentManagerStore,
} from "c15t"

export default defineNuxtPlugin(() => {
  const manager = configureConsentManager({
    mode: "offline",
  })

  const consentStore = createConsentManagerStore(manager, {
    namespace: "c15tStore",
    initialGdprTypes: [...allConsentNames],
    legalLinks: {
      privacyPolicy: {
        href: "/privacy-policy",
        target: "_self",
      },
      cookiePolicy: {
        href: "/cookies",
        target: "_self",
      },
    },
    callbacks: {
      onConsentSet: ({ preferences }) => {
        localStorage.setItem(
          "va-disable",
          preferences.measurement ? "false" : "true",
        )
      },
    },
  })

  return {
    provide: {
      c15tStore: consentStore,
    },
  }
})
