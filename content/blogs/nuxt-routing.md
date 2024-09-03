---
title: "Nuxt Routing: A Comprehensive Guide"
description: Dive deep into Nuxt's powerful and intuitive routing system
date: 2024-07-24
authors:
  - name: Dino Kupinic
    avatar: https://github.com/Dino-Kupinic.png
    handle: "@Dino-Kupinic"
tags:
  - Guide
  - Web
seo:
  image:
    src: "/images/blog/nuxt-routing.webp"
    alt: Nuxt routing diagram
---

![Nuxt Routing](/images/blog/nuxt-routing.webp)

Routing is a fundamental aspect of any web application, and Nuxt provides an intuitive and powerful routing system that
simplifies the process of creating and managing routes. In this comprehensive guide, we'll explore the ins and outs of
Nuxt routing, from basic concepts to advanced techniques.

## File-Based Routing

At the core of Nuxt's routing system is its file-based routing approach. This means that the structure of your `pages`
directory automatically determines your application's routes.

### Basic Routes

Let's start with a simple example:

```
pages/
  index.vue
  about.vue
  contact.vue
```

This structure automatically generates the following routes:

- `/` (maps to `index.vue`)
- `/about` (maps to `about.vue`)
- `/contact` (maps to `contact.vue`)

### Nested Routes

Nuxt allows you to create nested routes by using directories:

```
pages/
  index.vue
  products/
    index.vue
    [id].vue
```

This structure creates these routes:

- `/` (root index page)
- `/products` (products index page)
- `/products/:id` (dynamic product page)

### Dynamic Routes

Dynamic routes are created using square brackets `[]` in the file or directory name:

```
pages/
  users/
    [id].vue
```

This creates a dynamic route `/users/:id` where `:id` is a parameter that can be accessed in the component.

## Accessing Route Parameters

In your Vue component, you can access route parameters using the `useRoute` composable:

```vue
<script setup lang="ts">
const route = useRoute()
const userId = route.params.id
</script>

<template>
  <p>User ID: {{ userId }}</p>
</template>
```

## Navigation

Nuxt provides several ways to navigate between routes.

### NuxtLink Component

The `<NuxtLink>` component is the preferred way to create links in your application:

```vue
<template>
  <NuxtLink to="/about">About Us</NuxtLink>
</template>
```

`<NuxtLink>` is more than just a wrapper for `<a>` tags. It provides:

- Automatic code splitting
- Prefetching for faster navigation
- Active class for the current route

### Programmatic Navigation

You can also navigate programmatically using the `navigateTo` function:

```vue
<script setup>
function goToAbout() {
  await navigateTo('/about')
}
</script>
```

Remember to use `await` when calling `navigateTo` to ensure the navigation is complete before continuing.

## Route Middleware

Nuxt's route middleware allows you to run code before navigating to a particular route. This is useful for
authentication, logging, or any other processing you need to do before rendering a page.

### Creating Middleware

Create a file in the `middleware` directory:

```typescript
// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = // ... check authentication
  if (!isAuthenticated && to.path !== '/login') {
    return navigateTo('/login')
  }
})
```

### Using Middleware

You can apply middleware globally in your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  routeRules: {
    "/admin/**": { middleware: ["auth"] },
  },
})
```

Or directly in a page component:

```vue
<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
})
</script>
```

## Layouts

Layouts in Nuxt allow you to change the look and feel of your app. They're especially useful for maintaining consistent
UI elements across multiple pages.

### Default Layout

Create a default layout in `layouts/default.vue`:

```vue
<template>
  <div>
    <header>
      <!-- Your header content -->
    </header>
    <slot />
    <!-- This is where page content will be injected -->
    <footer>
      <!-- Your footer content -->
    </footer>
  </div>
</template>
```

### Custom Layouts

You can create custom layouts and apply them to specific pages:

```vue
<!-- layouts/blog.vue -->
<template>
  <div class="blog-layout">
    <!-- Blog-specific layout -->
    <slot />
  </div>
</template>

<!-- pages/blog/[id].vue -->
<script setup lang="ts">
definePageMeta({
  layout: "blog",
})
</script>
```

## Advanced Routing Techniques

### Nested Routes with Parent Component

You can create a parent component for nested routes:

```
pages/
  products.vue
  products/
    [id].vue
```

In this case, `products.vue` will act as a parent component, and its content will be rendered for both `/products` and
`/products/:id` routes.

### Route Validation

You can add route validation using the `validate` property in `definePageMeta`:

```vue
<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === "string" && /^\d+$/.test(route.params.id)
  },
})
</script>
```

This will only allow the route to be rendered if the `id` parameter is made up of digits.

### Catch-All Routes

You can create catch-all routes using three dots `...`:

```
pages/
  [...slug].vue
```

This will match any route that hasn't been matched by other routes.

## SEO and Metadata

Nuxt provides easy ways to manage SEO and metadata for your routes.

### Using `useHead`

The `useHead` composable allows you to set metadata for a page:

```vue
<script setup>
useHead({
  title: "My Amazing Page",
  meta: [{ name: "description", content: "This is an amazing page about..." }],
})
</script>
```

### Dynamic Metadata

You can also set metadata dynamically based on route parameters:

```vue
<script setup>
const route = useRoute()
const productId = route.params.id

const { data: product } = await useFetch(`/api/products/${productId}`)

useHead({
  title: product.value.name,
  meta: [{ name: "description", content: product.value.description }],
})
</script>
```

## Performance Considerations

Nuxt's routing system is designed with performance in mind, but there are still some considerations to keep in mind:

1. **Code Splitting**: Nuxt automatically code-splits your routes, but be mindful of the size of your page components.
2. **Prefetching**: While `<NuxtLink>` prefetches routes by default, you can disable this for specific links if needed.
3. **Lazy Loading**: For large components, consider using dynamic imports to lazy load them.

## Conclusion

Nuxt's routing system offers a powerful and flexible way to structure your application. From simple static routes to
complex nested and dynamic routes, Nuxt provides the tools you need to create intuitive and performant navigation for
your users.

By leveraging file-based routing, middleware, layouts, and Nuxt's built-in performance optimizations, you can create
sophisticated web applications with clean, maintainable routing code.
