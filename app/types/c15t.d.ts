import type { PrivacyConsentState } from "c15t"
import type { StoreApi } from "zustand/vanilla"

declare module "#app" {
  interface NuxtApp {
    $c15tStore: StoreApi<PrivacyConsentState>
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $c15tStore: StoreApi<PrivacyConsentState>
  }
}

export {}
