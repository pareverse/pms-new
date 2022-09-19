import { Avatar, Box, Button, GridItem, IconButton, LightMode, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import Card from 'components/card'
import { CheckCircle } from 'react-feather'

const Accounts = () => {
	return (
		<GridItem colSpan={4}>
			<Card h="full">
				<Box>
					<Stack justify="space-between" direction="row" p={6}>
						<Text fontSize="lg" fontWeight="medium">
							Accounts
						</Text>

						<Button size="sm">View All</Button>
					</Stack>

					<TableContainer>
						<Table>
							<Thead>
								<Tr>
									<Th>User</Th>
									<Th textAlign="center">Joined</Th>
									<Th textAlign="right"></Th>
								</Tr>
							</Thead>

							<Tbody>
								{[...Array(5)].map((data, index) => (
									<Tr key={index}>
										<Td>
											<Stack align="center" direction="row" spacing={3}>
												<Avatar size="sm" name={`User ` + (index + 1)} />
												<Text>User {index + 1}</Text>
											</Stack>
										</Td>

										<Td>Sep 15, 2022</Td>
										<Td textAlign="right">
											<Stack justify="end" direction="row" spacing={3}>
												<LightMode>
													<IconButton colorScheme="brand" size="sm" icon={<CheckCircle size={14} />} />
												</LightMode>
											</Stack>
										</Td>
									</Tr>
								))}
							</Tbody>
						</Table>
					</TableContainer>
				</Box>
			</Card>
		</GridItem>
	)
}

export default Accounts
