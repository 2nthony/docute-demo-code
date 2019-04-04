import { Config } from 'bili'

const config: Config = {
  input: 'src/index.ts',
  output: {
    moduleName: 'docuteDemoCode',
    fileName: 'index[min].js'
  }
}

export default config
