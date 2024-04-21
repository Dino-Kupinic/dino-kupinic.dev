---
title: "Exploring Vue.js Composition API"
description: "Vue's new Composition API makes for an interesting and joyful developer experience."
image: /assets/blog1-dark.webp
authors:
  - name: Dino Kupinic
    avatar: https://github.com/Dino-Kupinic.png
    handle: "@Dino-Kupinic"
  - name: Jannick Angerer
    avatar: https://github.com/Neuery17.png
    handle: "@neuery-17"
  - name: Michael Ploier
    avatar: https://github.com/mploier.png
    handle: "@SaurusRex"
related:
  - path: "/blogs/another-article"
  - path: "/blogs/third-article"
date: 2024-04-05T00:00:00.000Z
---

[Vue.js](https://www.vuejs.org) has been evolving rapidly, introducing new features and improvements to make web development smoother and more
efficient.

One of the most significant additions to Vue.js is the Composition API, which offers a more flexible and
scalable way to organize and reuse code in Vue components.

## What is the Composition API

The Composition API is an alternative API for creating Vue components that provides more flexibility and organization
compared to the Options API.

It allows developers to encapsulate logic into reusable functions called "composition
functions" and compose these functions within components. This approach promotes better code organization, reusability,
and readability, especially for complex components.

## Getting Started with the Composition API

Let's dive into the basics of the Composition API with some code examples. We'll start by creating a simple Vue
component that fetches and displays data from an API using the Composition API.

```vue
<script setup>
import { ref } from "vue"
// Reactive state.
const count = ref(0)
</script>

<template>
  <button>Count is: {{ count }}</button>
</template>
```

## Reactivity and Computed Properties

One of the key features of Vue.js is its reactivity system, which enables automatic updates to the DOM when data
changes.

The Composition API provides **reactive utilities** like `ref` and `computed` for managing reactive data and computed
properties.

| Key | Type      | Description |
| --- | --------- | ----------- |
| 1   | Wonderful | Table       |
| 2   | Wonderful | Data        |
| 3   | Wonderful | Website     |

_Just an italic paragraph._

**Just a strong paragraph.**

1. Foo
2. Bar
3. Baz

---

- Just
- An
- Unordered
- List

samc

- List

[//]: # "![A Cool Image](/images/blog1-dark.webp)"

`code inline`

`const codeInline: string = 'highlighted code inline'`

> Block quote
