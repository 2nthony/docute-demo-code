# docute-demo-code

🔥Live code block for better showcase for Docute

> This plugin still Work-In-Progress!  
> And now only support Vue SFC string!  
> For others you might want to try [docute-run-code](https://github.com/egoist/docute-plugins/tree/master/packages/run-code)

[![NPM version](https://badgen.net/npm/v/docute-demo-code)](https://npmjs.com/package/docute-demo-code)
[![NPM download](https://badgen.net/npm/dm/docute-demo-code)](https://npmjs.com/package/docute-demo-code)
[![License](https://badgen.net/npm/license/docute-demo-code)](./LICENSE)
[![buy me a coffee](https://badgen.net/badge/buy%20me%20a/coffee/a71)](https://patreon.com/evillt)

### 🤗Checkout the [live demo](https://docute-demo-code.now.sh)

## Usage

First load this plugin via `<script>` tag:

```html
<!-- Load this plugin after docute.js -->
<script src="https://unpkg.com/docute-demo-code@^0.1"></script>
```

This plugin exposed as `window.docuteDemoCode`

```js
new Docute({
  ...
  plugins: [
    docuteDemoCode()
  ]
})
```

Then, you can write a demo code block with live demo in `.md` file:  
(Don't forget to specify the code language to `html` or `vue`)

    # Introduction

    > Showcase for demo code

    :::demo
    ```html
    <template>
      <div>{{ msg }}</div>
    </template>

    <script>
    export default {
      data() {
        return {
          msg: 'Hi, 😋'
        }
      }
    }
    </script>
    ```
    :::

Similar to vuepress custom container huh?

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**docute-demo-code** © [evillt](https://github.com/evillt), Released under the [MIT](./LICENSE) License.

Authored and maintained by **EVILLT** with help from contributors ([list](https://github.com/evillt/docute-demo-code/contributors)).

> [evila.me](https://evila.me) · GitHub [@evillt](https://github.com/evillt) · Twitter [@evillt](https://twitter.com/evillt)
