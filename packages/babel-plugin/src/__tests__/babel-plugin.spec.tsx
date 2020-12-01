import babelTester from '../../scripts/babel-tester'
import plugin from '@kodiak-ui/babel-plugin'

// runs all files in the __fixtures__ folder through a babel transformation and snapshots them
babelTester('@emotion/babel-plugin', __dirname, {
  plugins: [plugin],
})
