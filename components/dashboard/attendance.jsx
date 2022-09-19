import { Avatar, Badge, Box, Button, ButtonGroup, GridItem, IconButton, LightMode, Select, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import Card from 'components/card'
import { Calendar } from 'react-feather'

const Attendance = () => {
	return (
		<GridItem colSpan={8}>
			<Card>
				<Box p={6}>
					<Stack justify="space-between" direction="row">
						<Text fontSize="lg" fontWeight="medium">
							Attendance
						</Text>

						<ButtonGroup isAttached>
							<Button size="sm">Sep 20, 2022</Button>

							<LightMode>
								<IconButton size="sm" colorScheme="brand" icon={<Calendar size={16} />} />
							</LightMode>
						</ButtonGroup>
					</Stack>
				</Box>

				<TableContainer>
					<Table>
						<Thead>
							<Tr>
								<Th>Employee</Th>
								<Th textAlign="center">Time In</Th>
								<Th textAlign="center">Time Out</Th>
								<Th textAlign="center">Status</Th>
							</Tr>
						</Thead>

						<Tbody>
							{[...Array(5)].map((data, index) => (
								<Tr key={index}>
									<Td>
										<Stack align="center" direction="row" spacing={3}>
											<Avatar size="sm" name={`Employee ` + (index + 1)} />
											<Text>Employee {index + 1}</Text>
										</Stack>
									</Td>

									<Td textAlign="center">8:00 AM</Td>

									<Td textAlign="center">9:00 PM</Td>

									<Td textAlign="center">
										<Stack justify="center" direction="row">
											<Badge colorScheme="blue">On Time</Badge>

											<Badge colorScheme="brand">Overtime</Badge>
										</Stack>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>
			</Card>
		</GridItem>
	)
}

export default Attendance
