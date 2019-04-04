# Guide

🔥Live code block for better showcase for Docute

### Origin code block:

```html
<template>
  <div>
    <span class="count">count: {{ count }}</span>
    <button @click="plus">+</button>
    <button @click="minus">-</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    },
    methods: {
      plus() {
        this.count++
      },
      minus() {
        this.count--
      }
    }
  }
</script>

<style>
  .count {
    color: #2a7;
  }
</style>
```

### With docute-demo-code plugin:

See the count button right here 😋? It's live🔥!

:::demo

```html
<template>
  <div>
    <span class="count">count: {{ count }}</span>
    <button @click="plus">+</button>
    <button @click="minus">-</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    },
    methods: {
      plus() {
        this.count++
      },
      minus() {
        this.count--
      }
    }
  }
</script>

<style>
  .count {
    color: #2a7;
  }
</style>
```

:::

### Without wrapper:

You don't have to use the `<template>` to wrap your node

:::demo

```html
<h3 class="title">Hi there!</h3>
<button @click="count++">count: {{ count }}</button>

<script>
  export default {
    data() {
      return {
        count: 233
      }
    }
  }
</script>

<style>
  .title {
    color: #58a;
  }
</style>
```

:::
