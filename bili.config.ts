import { Config } from 'bili'

const config: Config = {
  input: 'src/index.ts',
  output: {
    moduleName: 'docuteDemoCode',
    format: ['umd-min', 'umd']
  }
}

export default config
