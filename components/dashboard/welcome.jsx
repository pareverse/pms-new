import { useSession } from 'next-auth/react'
import { Box, chakra, Flex, GridItem, Stack, Text } from '@chakra-ui/react'
import Card from 'components/card'

const Welcome = () => {
	const { data: session } = useSession()

	return (
		<GridItem colSpan={4}>
			<Card p={6} h="full">
				<Stack direction="row" h="full">
					<Stack justify="center" spacing={1}>
						<Text fontSize="lg" fontWeight="medium" noOfLines={2}>
							Good Afternoon,
							<br /> <chakra.span color="brand.500">{session.user.name}!</chakra.span>
						</Text>

						<Text fontSize="sm" color="muted">
							Here&apos;s what&apos;s happening today.
						</Text>
					</Stack>

					<Flex justify="end" align="center" flex={1} position="relative">
						<Text position="absolute" fontSize={64}>
							🎉
						</Text>
						<Box bg="brand.200" boxSize={24} borderRadius="full"></Box>
					</Flex>
				</Stack>
			</Card>
		</GridItem>
	)
}

export default Welcome
