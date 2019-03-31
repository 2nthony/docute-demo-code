import parser from './parser'

export default function docuteDemoCode() {
  return {
    name: 'docute-plugin-demo-code',
    extend: (api: any) => api.processMarkdown(parser)
  }
}
