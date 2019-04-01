# Guide

🔥Live code block for better showcase for Docute

### Origin code block:

```html
<template>
  <button @click="inc">count: {{ count }}</button>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    },
    methods: {
      inc() {
        this.count++
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
  <button @click="inc">count: {{ count }}</button>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    },
    methods: {
      inc() {
        this.count++
      }
    }
  }
</script>
```

:::
