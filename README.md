# Vue Content 📝 #

![Publish NPM packages](https://github.com/Byloth/vue-content/workflows/Publish%20package%20on%20NPM%20&%20GPR/badge.svg)

### A fork of **[@nuxt/content](https://github.com/nuxt/content)** to backporting its functionality to standard Vue apps. ###

---

## Installation ##

### Using [`npm`](https://www.npmjs.com/): ###

```bash
npm install @byloth/vue-content --save
```

### Using [`yarn`](https://yarnpkg.com/): ###

```bash
yarn add @byloth/vue-content
```

## Configuration ##


```ts
/* main.ts */

import { createApp } from "vue";
import VueContent from "@byloth/vue-content";

export default createApp(App)
    .use(VueContent)
    .mount("#app");
```

## Usage ##

**`vue-content`** is designed to look for the `content` folder in the project's `public` directory.  
Here, you can place your content files in any arrangement that you may feel comfortable with.

For example:

```
vue-project
 ├─── dist/*
 ├─── public/
 │     ├─── content/
 │     │     ├─── blog/
 │     │     │     └─── articles/
 │     │     │           ├─── that-time-i-fixed-the-world.md
 │     │     │           └─── vue-2-vs-vue-3.md
 │     │     │
 │     │     ├─── posts/
 │     │     │     ├─── happy-new-year.md
 │     │     │     └─── hello-world.md
 │     │     │
 │     │     ├─── my-portfolio.md
 │     │     └─── who-i-am.md
 │     │
 │     ├─── favicon.ico
 │     └─── robots.txt
 │
 └─── src/
       ├─── components/*
       ├─── App.vue
       └─── main.ts
```

### Using [Options API](https://vuejs.org/guide/introduction.html#options-api): ###

```vue
/* ExampleOptionsComponent.vue */

<template>
    <ContentRenderer v-if="document" :value="document" />
</template>

<script>
export default {
    data: () => ({ document: null }),
    created: function() { this.fetchDocument(); },

    methods: {
        async fetchDocument() {
            this.document = await this.$content.getDocument("blog/articles", "vue-2-vs-vue-3");
        }
    }
}
<script>
```

### Using [Composition API](https://vuejs.org/guide/introduction.html#composition-api): ###

```vue
/* ExampleCompositionComponent.vue */

<template>
    <ContentRenderer v-if="document" :value="document" />
</template>

<script setup>
import { ref } from "vue";
import { useContent } from "@byloth/vue-content";

const document = ref(null);
const $content = useContent();

const fetchDocument = async () => {
    document.value = await $content.getDocument("who-i-am");
};

fetchDocument();
<script>
```

---

## Roadmap ##

- [ ] **Tests!**
- [ ] Support for CSV content files
- [ ] Support for JSON content files
- [ ] Support for YAML content files
- [ ] Support for Highlighted code blocks
- [ ] Support for SSG (Static Site Generation)
- [ ] Support for Query builder API.
