export type Text = string

declare var Vue: any

interface RegisterOptions {
  template: string
  script: string
}

export function stripDemoBlock(text: Text): Text {
  return text.replace(/:::demo\s*([\s\S]*):::/, '$1')
}

export function parseComponent(text: Text): RegisterOptions {
  const component = stripDemoBlock(text).replace(/```html([\s\S]*)\s*```/, '$1')

  const JS_RE = /<(script)>([\s\S]*)<\/\1>/
  const ESM_SCRIPT_RE = /<(script)>[\s\S]*export\s*default\s*{\s*([\s\S]*)}\s*<\/\1>/
  const [matchedScript = ''] = component.match(JS_RE) || []
  const template = component.replace(JS_RE, '')
  const script = matchedScript.replace(ESM_SCRIPT_RE, '$2')

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

  Vue.component(`demo-${id}`, resolveComponent())
}
