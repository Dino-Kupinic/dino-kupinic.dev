---
title: What is Nuxt? A beginner-friendly overview
description: Learn about the intuitive meta-framework for Vue.js
authors:
  - name: Dino Kupinic
    avatar: https://github.com/Dino-Kupinic.png
    handle: "@Dino-Kupinic"
date: 2024-07-13T00:00:00.000Z
---

[Nuxt.js](https://nuxt.com) is an open-source framework for building **full-stack** web apps and websites using Vue.js.
As a meta-framework, Nuxt builds upon Vue.js,
adding structure, features, and optimizations to enhance the development experience and application performance.

It is used by companies like [OpenAI](https://openai.com/),
[TikTok](https://www.tiktok.com/) or [Upwork](https://www.upwork.com/).
Its main feature is **SSR** (Server-Side Rendering),
which allows you to render Vue components on the server before sending them to the client.

This approach significantly improves **SEO** (Search Engine Optimization) and initial page load performance.

---

Personally, I've been using it for a couple of projects, and I've come to _love_ it.

## Features

Nuxt comes with everything included for building complex and enterprise-grade applications and websites.
Below are the most important aspects.

### File-based Routing

Instead of managing your routes in a separate file,
Nuxt builds your routes based on how they are structured in the `/pages` directory.
This is quite convenient compared to dealing with [Vue Router](https://router.vuejs.org/) manually.

You can also define [Layouts](https://nuxt.com/docs/getting-started/views#layouts) for your application.
For example, you might have a layout where you do not have a footer or navigation bar.

```
pages/
 - products.vue
 - contact.vue
 - index.vue
```

Here we can see an example of the file-based routing.
Nuxt will generate the following routes: `/products`, `/contact` and `/` (index).
You can also define nested routes using directories.

### Auto-Imports

If you've used Vue or any other JavaScript framework, you will know the pain of managing big blocks of imports at the
top of each file.

Nuxt solves this issue by auto-importing common things like _Components_, _Directives_ (e.g. `ref`, `computed`),
_Composables_ (`/composables`) and _Utility functions_ (`/utils`).

Before (Vue):

```vue
<script setup>
import { ref, computed } from "vue"
import Navbar from "@/components/NavBar.vue"
import { useBlogs } from "@/composables/useBlogs"
import { isEven } from "@/utils/isEven"

// code
</script>
```

After (Nuxt):

```vue
<script setup>
// No imports needed! Everything is auto-imported
const ref = ref(0)
const double = computed(() => ref.value * 2)
const { blogs } = useBlogs()
</script>
```

### Middleware

Nuxt allows you to execute code before navigating to a specific route.
A common use case is checking if the user is logged in for protected routes.

Here's a code snippet from one of my projects, where I implemented simple authentication middleware:

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

Nuxt modules extend the core functionality of your Nuxt application, allowing you to easily integrate third-party
libraries.

Modules can simplify tasks such as handling authentication, or adding UI components.
For example, to add Tailwind CSS to your project, you can install the module and Nuxt will handle the rest:

```bash
npx nuxi@latest module add tailwindcss
```

Then add it to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
})
```

They are highly configurable, enabling you to tailor their behavior to fit your specific needs.
Even better, most of them work without any configuration completely.

I'd recommend you to check out the [Modules](https://nuxt.com/modules) page!

### Data Fetching

Nuxt offers improved data fetching methods compared to the standard `Fetch API`.
These methods provide better integration with the Nuxt lifecycle,
automatic error handling, and improved performance through caching and deduplication.
Here are the three main ways to fetch data in Nuxt:

- **`useFetch`**: A composable function that fetches data on both client and server-side.
  It is ideal for component-level data fetching and provides reactive properties for easy handling
  of `loading`, `error`, and `data`
  states.
- **`useAsyncData`**: Designed for wrapping asynchronous logic, `useAsyncData` resolves data fetches and returns results
  upon completion. It's noteworthy that `useFetch` is nearly analogous to `useAsyncData(url, () => $fetch(url))`.
- **`$fetch`**: A sort of better `fetch()`. It should be used on user interaction (e.g., in a `addTodo` function). It
  does not provide **Network calls duplication**.

If you find yourself not being able to use `useFetch`, you can still wrap the call with `useAsyncData` to keep the
benefits.

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

Nuxt.js offers a hot reload feature like Vue.js. Whenever you make changes to your code, Nuxt will automatically apply
those changes and reflect them in real-time without requiring a page refresh.

This greatly enhances the development experience by providing instant feedback and speeding up the development process.

### State Management

Nuxt provides built-in state management that can simplify your application's data flow.
While you can use Pinia for complex state management, Nuxt offers the `useState` composable for simpler use cases.

The `useState` composable creates a reactive and _SSR-friendly_ shared state.
It's particularly useful for sharing state between components, pages, and server-side code.

```vue
<script setup>
const counter = useState("counter", () => 0)

function increment() {
  counter.value++
}
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button @click="increment">Increment</button>
  </div>
</template>
```

In this example,
`useState` creates a reactive counter that persists across component re-renders
and can be shared throughout the application.

### Plugins

Nuxt's plugin system allows you to extend core functionality and add global components, functions, or libraries.
Plugins are automatically imported and run before instantiating the root Vue application.

To create a plugin, add a `.js` or `.ts` file in the `/plugins` directory:

```ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("test", () => console.log("Hello from plugin!"))
})
```

You can then use this plugin throughout your application:

```vue
<script setup>
const { $test } = useNuxtApp()
$test() // "Hello from plugin!"
</script>
```

### Rendering Modes

Not every application is the same, and Nuxt offers a few options to optimize for your project.
Below is everything you can do with Nuxt.

| Mode                                      | Explanation                                                                       | Usage                                                     |
| ----------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **SSR** (Server Side Rendering)           | HTML is rendered on the server and sent to the client                             | The preferred mode for most applications                  |
| **SPA** (Single Page Application)         | JavaScript is rendered on the client, providing dynamic and fast navigation       | Preferable for Dashboards and highly interactive web apps |
| **SSG** (Static Site Generation)          | HTML is generated at build time, creating static files                            | Ideal for static websites and blogs                       |
| **ISR** (Incremental Static Regeneration) | Static pages are built at runtime and can be updated incrementally                | Suitable for content-heavy sites with frequent updates    |
| **SWR** (Stale While Revalidate)          | Data fetching strategy that shows stale data while revalidating in the background | Useful for dynamic data fetching in SPAs and SSR apps     |

Each mode has their own advantages and disadvantages. If you feel like your project could make use of a combination of
these modes, you will love the Hybrid Rendering feature.

### Hybrid Rendering

Nuxt can be configured to render each route differently. This feature provides granular control over how to render different parts of your application.

```ts
export default defineNuxtConfig({
  routeRules: {
    "/": { prerender: true }, // Static Site Generation
    "/products/**": { swr: 3600 }, // SWR with 1 hour cache
    "/admin/**": { ssr: false }, // Client-side rendering
    "/api/**": { cors: true }, // Enable CORS on API routes
    "/blog/**": { static: true }, // Serve as static resource
  },
})
```

See the full example in the [Documentation](https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering).

## Nitro

Since Nuxt is a full-stack framework (meaning we both have a "frontend" and "backend"), it also needs a server.

The "backend" of Nuxt is powered by the [Nitro](https://nitro.unjs.io/) server engine.
Under the hood it uses [h3](https://h3.unjs.io/), a minimal Node.js framework.

Key features:

1. **Serverless-ready**: Optimized for serverless environments out of the box.
2. **Universal Deploy**: Compatible with all major cloud providers.
3. **Standalone**: Can be used as a standalone server for your APIs.
4. **File-based routing**: Similar to Nuxt, Nitro uses file-based routing.

```ts
// server/api/hello.ts
export default defineEventHandler((event) => {
  return {
    message: "Hello World!",
  }
})
```

This example demonstrates a simple Nitro route that returns a static JSON response.

```ts
// server/api/products/index.get.ts
export default defineEventHandler(async (event) => {
  try {
    // Fetch all products from the database
    const products = await db.select().from(productsTable)
    return products
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    })
  }
})
```

This more complex example shows how to use Nitro with a database (using Drizzle ORM).
It fetches data asynchronously and includes error handling, representing a typical real-world API endpoint.

## Nuxt DevTools

Nuxt comes with built-in DevTools that provide powerful debugging and inspection capabilities.
These tools offer insights into your application's structure, performance, and runtime behavior.

With Nuxt DevTools, you can:

- Inspect component hierarchy
- View and modify state in real-time
- Analyze network requests
- Debug server-side rendered content

To use DevTools, run your Nuxt application in development mode, and they will be available in your browser.
If you can't see them, make sure to enable them in the `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
})
```

## Summary

Nuxt.js is a powerful and flexible meta-framework for Vue.js
that streamlines the process of building modern web applications.

Its key features include:

1. **File-based Routing**: Simplifies route management.
2. **Auto-Imports**: Reduces boilerplate code.
3. **Server-Side Rendering (SSR)**: Improves SEO and initial load times.
4. **Static Site Generation (SSG)**: Enables fast, pre-rendered static sites.
5. **Hybrid Rendering**: Allows different rendering strategies for various routes.
6. **Built-in State Management**: Simplifies data flow with `useState`.
7. **Middleware**: Enables code execution before rendering.
8. **Modules**: Extends functionality with easy integration of third-party libraries.
9. **Nitro Server Engine**: Provides a powerful and flexible backend.
10. **Enhanced Data Fetching**: Offers improved methods like `useFetch` and `useAsyncData`.

Nuxt combines these features with an intuitive development experience,
making it an excellent choice for projects of all sizes.

Whether you're building a small personal website or a large-scale enterprise application,
Nuxt provides the tools and structure to help you create performant, SEO-friendly, and maintainable Vue.js applications.
