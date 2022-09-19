import { extendTheme } from '@chakra-ui/react'
import * as foundations from './foundations'
import * as components from './components'

const theme = extendTheme({
	...foundations,
	components: {
		...components
	},
	config: {
		initialColorMode: 'dark',
		cssVarPrefix: 'css'
	}
})

export default theme
