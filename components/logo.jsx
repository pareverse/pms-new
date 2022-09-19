import { Flex, Icon } from '@chakra-ui/react'
import { Feather } from 'react-feather'

const Logo = (props) => {
	return (
		<Flex bg="brand.500" justify="center" align="center" borderRadius="full" h={props.size ? props.size : 8} w={props.size ? props.size : 8} {...props}>
			<Icon as={props.icon ? props.icon : Feather} boxSize={props.size ? props.size / 2 : 4} color="white" />
		</Flex>
	)
}

export default Logo
