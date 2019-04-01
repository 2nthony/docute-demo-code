# Guide

🔥Live code block for better showcase for Docute

### Origin code block:

```html
<template>
  <div>
    <span style="color: #2a7">count: {{ count }}</span>
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
```

### With docute-demo-code plugin:

See the count button right here 😋? It's live🔥!

:::demo

```html
<template>
  <div>
    <span style="color: #2a7">count: {{ count }}</span>
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
```

:::
