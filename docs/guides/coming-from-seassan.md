# Transitioning from seassan

Coming from seassan? While the fundamentals are the same, here is some stuff you need to know:

## 1. Creating a project

Setso is not concerned with creating/setting up a project. This is by design, in an attempt to make it more lightweight.

If you want a full setup you can use the setso default starter:

```shell
git clone https://github.com/setsojs/setso-starter.git
```

## 2. Configuring your enviorment

To configure your enviorment (eg: input and output) you use a [`setso.config.js`](../api/setso.config.js.md) instead of cli opts.

## 3. New features

Setso offers some new features:

- Mdx support