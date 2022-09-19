import { signOut } from 'next-auth/react'
import { Button, chakra, Flex, LightMode, Stack, Text } from '@chakra-ui/react'
import { UserX } from 'react-feather'
import Logo from 'components/logo'

const Error401 = () => {
	return (
		<Flex justify="center" align="center" h="100vh" w="full">
			<Stack bg="bg-surface" spacing={12} borderRadius="xl" p={12} shadow="sm" _dark={{ shadow: 'none' }}>
				<Stack align="center" spacing={6}>
					<Logo icon={UserX} size={24} />

					<Stack spacing={3} textAlign="center">
						<Text as="h1" fontSize="2xl" fontWeight="bold" color="solid">
							<chakra.span color="brand.500">401</chakra.span> Unauthorized
						</Text>

						<Text>
							Access is denied due to,
							<br /> invalid credentials.
						</Text>
					</Stack>
				</Stack>

				<Stack spacing={3} w={264}>
					<Button onClick={() => signOut()}>Sign Out</Button>

					<LightMode>
						<Button colorScheme="brand">Make contact with us</Button>
					</LightMode>
				</Stack>
			</Stack>
		</Flex>
	)
}

Error401.authentication = {
	required: true
}

export default Error401
