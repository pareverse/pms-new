import { chakra } from '@chakra-ui/react'
import HeaderContent from './content'

const Header = () => {
	return (
		<chakra.header bg="bg-surface" position="sticky" top={0} shadow="sm" zIndex={100} _dark={{ shadow: 'none' }}>
			<HeaderContent />
		</chakra.header>
	)
}

export default Header
