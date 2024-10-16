---
title: "Why you should usually avoid using SaaS"
description: You don't know how to host, write a websocket or do e-mail
date: 2024-09-15
authors:
  - name: Dino Kupinic
    avatar: https://github.com/Dino-Kupinic.png
    handle: "@Dino-Kupinic"
tags:
  - Rant
  - Advice
seo:
  image:
    src: "/images/blog/saas_blog.png"
    alt: SaaS blog post cover image
---

![SaaS](/images/blog/saas_blog.png)

Vercel for hosting, Supabase for databases, Resend for emails, etc.

While these services promise convenience and speed, they're creating a generation of developers who can't build
fundamental solutions themselves.

## Convenience

We've all been there. You're starting a new project, and you think:

- "I'll just use Vercel for deployment"
- "Supabase will handle my database and backend needs"
- "Resend can manage my emails"

It's quick, it's straightforward, and it works... until you are hit with a fat bill.

## The Real Costs

**Financial Dependencies**

- Every service adds to your monthly bill
- Costs often scale with usage, unpredictably
- You're paying premium prices for basic functionalities

**Technical Limitations**

- Locked into specific platforms and their limitations
- Limited customization options
- Dependency on third-party uptime and performance

**Knowledge Gaps**

- Missing fundamental understanding of core concepts
- Unable to troubleshoot deeper issues
- Reduced ability to optimize and scale

## What are going to do when those services disappear?

Companies come and go.
What happens when the service you rely on is shutting down?
Or changes their pricing?
Or gets acquired by a competitor?

### Hosting

Instead of learning how to set up a linux server, configure nginx or apache,
manage SSL certificates or handle load balancing, you're clicking `Deploy to Vercel` and calling it a day.

Getting a VPS and deploying a simple app is a great exercise in understanding how the web works.

### Database

Rather than understanding database design principles, query optimization, backup strategies, scaling considerations,
you're relying on Supabase's abstractions.

Setting up a basic PostgreSQL database and interacting with it directly will give you a much deeper understanding of how
data is stored and retrieved.

### Email

Instead of learning about SMTP protocols, Email deliverability,SPF and DKIM records and queue management, you're just
plugging in Resend API keys.

Setting up a basic email server and sending emails programmatically will teach you how email works under the hood.

## Merchants of Complexity

This great post by [DHH](https://x.com/dhh) (Creator of Ruby on Rails),
[Merchants of Complexity](https://world.hey.com/dhh/merchants-of-complexity-4851301b),
explains how SaaS companies are selling complexity disguised as simplicity.

## When SaaS Makes Sense

There are legitimate cases for using SaaS and I myself use them when it makes sense:

- **MVP Development**: When you need to validate an idea quickly
- **Small Personal Projects**: Where learning infrastructure isn't the goal (leeching off of free tiers)
- **Specific Complex Features**: When the service provides genuine expertise

## Conclusion

SaaS is a double-edged sword. It can be a great tool for rapid development and prototyping, but it can also be a crutch
that hinders your growth as a developer.
