---
title: Schulbuchaktion
description: "Intuitive book ordering management system for Austrian schools"
icons:
  - i-simple-icons-nuxtdotjs
  - i-simple-icons-symfony
  - i-simple-icons-docker
technologies:
  - Nuxt.js
  - TypeScript
  - Tailwind CSS
  - PWA
  - Vitest
  - Playwright
  - Symfony
  - MySQL
  - PHPTest
  - LDAP
  - Docker
  - VitePress
  - OpenAPI
date: 2024-03-07T00:00:00.000Z
featured: true
deployed:
  vendor: Vercel
  url: https://schulbuchaktion-docs.vercel.app/
  icon: i-simple-icons-vercel
repository:
  url: https://github.com/Dino-Kupinic/Schulbuchaktion
---

## Description

This project is meant to simplify the process of ordering books and managing budgets for schools.
The software is used by teachers to order books for their classes.

Schulbuchaktion has complete integration with [LDAP (Lightweight Directory Access Protocol)](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol) for user authentication and authorization.
Reason for this authentication method is that managing users in a school environment is much easier with LDAP.

Furthermore, managing accounts inside the app and outside is extra work and overhead for administrators.

Though, the rights protection (via middleware) to resources is managed by LDAP roles and groups.
In order for that to work, minor one-time changes have to be made to the LDAP server.

### Key Features

- **Data Import:**
  ordering depends on data from the official [Schulbuchaktion](https://schulbuchaktion.at) website. Teachers can import the newest data on a yearly basis.
- **Budget Management:**
  users can view the overall budget and usage per class. Teachers are warned if the costs are getting close to the budget limit.
- **Class Management:**
  administrators can easily create, read, update and delete classes for which books can be ordered for.
- **Security:**
  schulbuchaktion makes use of [JWT Tokens](https://jwt.io/) and middleware on both the front- and backend to secure the app. Unauthenticated users do not have permission to access the API aswell.
- **Extensive Documentation:**
  the documentation features both guides for users and developers. While the app is designed to be simple and intuitive, teachers can still look up on how to use certain features.
