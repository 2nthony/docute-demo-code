export type Text = string

export interface Options {
  showBorder?: boolean
}

declare var Vue: any

interface RegisterOptions {
  template: string
  script: string
}

export function stripDemoBlock(text: Text): Text {
  return text.replace(/(:{3})demo\s*([\s\S]*)\1/, '$2')
}

export function parseComponent(text: Text): RegisterOptions {
  const component = stripDemoBlock(text).replace(
    /(`{3})(html|vue)([\s\S]*)\s*\1/,
    '$3'
  )

  const JS_RE = /<(script)>([\s\S]*)<\/\1>/
  const MODULE_JS_RE = /<(script)>[\s\S]*export\s*default\s*{\s*([\s\S]*)}\s*<\/\1>/

  const [matchedScript = ''] = component.match(JS_RE) || []

  const template = component
    .replace(JS_RE, '')
    // Replace all style tag to docute built-in component `<v-style>`
    .replace(/<(\/?)style>/g, '<$1v-style>')
  const script = matchedScript.replace(MODULE_JS_RE, '$2').replace(JS_RE, '')

  return {
    template,
    script
  }
}

export function registerComponent(
  { template, script }: RegisterOptions,
  id: number
) {
  if (!Vue) return

  const resolveComponent = new Function(
    `return {template: \`<section>${template}</section>\`,${script}}`
  )

  Vue.component(`Demo${id}`, resolveComponent())
}
