import parser from './parser'
import { Options } from './utils'

export default function docuteDemoCode(
  options: Options = {
    showBorder: true
  }
) {
  return {
    name: 'docute-plugin-demo-code',
    extend: (api: any) => api.processMarkdown(parser(options))
  }
}
