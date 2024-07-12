---
title: What is Nuxt? A beginner-friendly overview
description: Learn about the intuitive meta-framework for Vue.js
authors:
  - name: Dino Kupinic
    avatar: https://github.com/Dino-Kupinic.png
    handle: "@Dino-Kupinic"
date: 2024-06-30T00:00:00.000Z
---

[Nuxt.js](https://nuxt.com) is an open-source framework for building **full-stack** web apps and websites. It is easy to learn, fast, powerful and offers a module system for progressive enhancements. It is used by companies like [OpenAI](https://openai.com/), [TikTok](https://www.tiktok.com/) or [Upwork](https://www.upwork.com/).

Its main feature is **SSR** (Server-Side Rendering), which allows you to render Vue on the server for SEO and performance. It also supports SSG and SPA (this will be covered later).

---

Personally, I've been using it for a couple of projects and I've come to _love_ it.

## Features

Nuxt comes with everything included for building complex and enterprise-grade applications and websites. Below are the most important aspects.

### File-based Routing

Instead of managing your routes in a seperate file, Nuxt builds your routes based on how they are structured in the `/pages` directory. This is quite convenient compared to dealing with [Vue Router](https://router.vuejs.org/) manually.

You can also easily define [Layouts](https://nuxt.com/docs/getting-started/views#layouts) for your application. For example, you might have a layout where you do not have a footer or navigation bar.

```
pages/
 - products.vue
 - contact.vue
 - index.vue
```

Here we can see an example of the file-based routing. Nuxt will generate following routes: `/products`, `/contact` and `/` (index).
You can also define nested routes using directories.

### Auto-Imports

If you've used Vue or any other JavaScript framework, you will know the pain of managing big blocks of imports at the top of each file.

Nuxt solves this issue by auto-importing common things like _Components_, _Directives_ (e.g. `ref`, `computed`), _Composables_ (`/composables`) and _Utility functions_ (`/utils`).

### Middleware

Nuxt allows you to execute code before navigating to a specific route. A common use case is checking if the user is logged in for protected routes.

Here's a code snippet from one of my projects, where I implemented a simple authentication middleware:

```ts
export default defineNuxtRouteMiddleware((to, from) => {
  // redirect to login if not authenticated
  if (!authenticated && to.path !== "/login") {
    return navigateTo("/login")
  }

  // prevent from going to the login page when logged in
  if (authenticated && to.path === "/login") {
    return navigateTo("/")
  }
})
```

### Modules

Nuxt modules extend the core functionality of your Nuxt application, allowing you to easily integrate third-party libraries.

Modules can simplify tasks such as handling authentication, or adding UI components. With a vast ecosystem of official and community modules, you can enhance your project without reinventing the wheel.

They are highly configurable, enabling you to tailor their behavior to fit your specific needs. Even better, most of them work without any configuration whatsoever.

I'd recommend you to check out the [Modules](https://nuxt.com/modules) page!

### Data Fetching

Fetching data with the `Fetch API` is alright, but we can do better! Nuxt offers 3 distinct ways of fetching data:

- **`useFetch`**: A composable function that fetches data on both client and server-side. It is ideal for component-level data fetching and provides reactive properties for easy handling of `loading`, `error`, and `data` states.
- **`useAsyncData`**: Designed for wrapping asynchronous logic, `useAsyncData` resolves data fetches and returns results upon completion. It's noteworthy that `useFetch` is nearly analogous to `useAsyncData(url, () => $fetch(url))`.
- **`$fetch`**: A sort of better `fetch()`. It should be used on user interaction (e.g. in a `addTodo` function). It does not provide **Network calls duplication**.

If you find yourself not being able to use `useFetch`, you can still wrap the call with `useAsyncData` to keep the benefits.

Here is an example of data fetching in Nuxt:

```vue
<script setup lang="ts">
const { data: products } = await useFetch("/api/v1/products")
</script>

<template>
  <p v-for="product in products" :key="product.id">
    {{ product.name }}, {{ product.price }}$
  </p>
</template>
```

While this is great, this blocks navigation until the products have been fetched.

### Hot Reload

Nuxt.js offers a hot reload feature like Vue.js. Whenever you make changes to your code, Nuxt will automatically apply those changes and reflect them in real-time without requiring a page refresh.

This greatly enhances the development experience by providing instant feedback and speeding up the development process.

## Rendering Modes

Not every application is the same and Nuxt offers a few options to optimize for your project. Below is everything you can do with Nuxt.

| Mode                                      | Explanation                                                                       | Usage                                                     |
| ----------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **SSR** (Server Side Rendering)           | HTML is rendered on the server and sent to the client                             | The preferred mode for most applications                  |
| **SPA** (Single Page Application)         | JavaScript is rendered on the client, providing dynamic and fast navigation       | Preferable for Dashboards and highly interactive web apps |
| **SSG** (Static Site Generation)          | HTML is generated at build time, creating static files                            | Ideal for static websites and blogs                       |
| **ISR** (Incremental Static Regeneration) | Static pages are built at runtime and can be updated incrementally                | Suitable for content-heavy sites with frequent updates    |
| **SWR** (Stale While Revalidate)          | Data fetching strategy that shows stale data while revalidating in the background | Useful for dynamic data fetching in SPAs and SSR apps     |

Each mode has their own advantages and disadvantages. If you feel like your project could make use of a combination of these modes, you will love the Hybrid Rendering feature.

### Hybrid Rendering

Nuxt can be configured to render each route differently. No other framework gives you such granular control over how to render different parts of your application.

```ts
export default defineNuxtConfig({
  routeRules: {
    "/home": { prerender: true }, // pre-render on build
    "/blogs/**": { isr: true }, // generate on demand once until next deployment
    "/admin/**": { ssr: false }, // render only on client-side
  },
})
```

See the full example in the [Documentation](https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering).

## Nitro

Since Nuxt is a full-stack framework (meaning we both have a "frontend" and "backend") it also needs a server.

The "backend" of Nuxt is powered by the [Nitro](https://nitro.unjs.io/) server engine. Under the hood it uses [h3](https://h3.unjs.io/), a minimal Node.js framework.
