import { Box, Flex, GridItem, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Card from 'components/card'
import { CheckCircle, Users, UserX, X } from 'react-feather'

const Statistics = () => {
	return (
		<GridItem colSpan={8}>
			<Card p={6}>
				<Stack spacing={6}>
					<Stack justify="space-between" align="center" direction="row">
						<Text fontSize="lg" fontWeight="medium">
							Statistics
						</Text>

						<Text fontSize="sm">Today</Text>
					</Stack>

					<SimpleGrid columns={4}>
						<Stack align="center" direction="row" spacing={3}>
							<Flex bg="brand.500" justify="center" align="center" h={12} w={12} borderRadius="full">
								<Icon as={Users} boxSize={6} color="white" />
							</Flex>

							<Box>
								<Text fontSize="2xl" fontWeight="bold">
									25
								</Text>

								<Text mt="-4px" fontSize="xs" color="muted">
									Employees
								</Text>
							</Box>
						</Stack>

						<Stack align="center" direction="row" spacing={3}>
							<Flex bg="brand.500" justify="center" align="center" h={12} w={12} borderRadius="full">
								<Icon as={CheckCircle} boxSize={6} color="white" />
							</Flex>

							<Box>
								<Text fontSize="2xl" fontWeight="bold">
									20
								</Text>

								<Text mt="-4px" fontSize="xs" color="muted">
									On Time Today
								</Text>
							</Box>
						</Stack>

						<Stack align="center" direction="row" spacing={3}>
							<Flex bg="brand.500" justify="center" align="center" h={12} w={12} borderRadius="full">
								<Icon as={X} boxSize={6} color="white" />
							</Flex>

							<Box>
								<Text fontSize="2xl" fontWeight="bold">
									8
								</Text>

								<Text mt="-4px" fontSize="xs" color="muted">
									Late Today
								</Text>
							</Box>
						</Stack>

						<Stack align="center" direction="row" spacing={3}>
							<Flex bg="brand.500" justify="center" align="center" h={12} w={12} borderRadius="full">
								<Icon as={UserX} boxSize={6} color="white" />
							</Flex>

							<Box>
								<Text fontSize="2xl" fontWeight="bold">
									5
								</Text>

								<Text mt="-4px" fontSize="xs" color="muted">
									Absent Today
								</Text>
							</Box>
						</Stack>
					</SimpleGrid>
				</Stack>
			</Card>
		</GridItem>
	)
}

export default Statistics
