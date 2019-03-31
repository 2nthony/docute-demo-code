import parser from './parser'

export default {
  name: 'docute-plugin-demo-code',
  extend: (api: any) => api.processMarkdown(parser)
}
