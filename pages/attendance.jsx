import { Avatar, Badge, Box, Button, ButtonGroup, IconButton, Input, LightMode, Select, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import Card from 'components/card'
import { Calendar, ChevronLeft, ChevronRight } from 'react-feather'

const Attendance = () => {
	return (
		<>
			<Text fontSize="4xl" fontWeight="bold" mb={6}>
				Attendance
			</Text>
			<Card>
				<Stack justify="space-between" direction="row" p={6}>
					<Box>
						<Input placeholder="Search..." />
					</Box>

					<Stack direction="row" spacing={3}>
						<Button variant="outline">History</Button>

						<ButtonGroup isAttached>
							<Button>Sep 20, 2022</Button>

							<LightMode>
								<IconButton colorScheme="brand" icon={<Calendar size={16} />} />
							</LightMode>
						</ButtonGroup>
					</Stack>
				</Stack>

				<TableContainer>
					<Table>
						<Thead>
							<Tr>
								<Th>Employee</Th>

								<Th textAlign="center">Date</Th>
								<Th textAlign="center">Time In</Th>
								<Th textAlign="center">Time Out</Th>
								<Th textAlign="center">Total Hours Worked</Th>
							</Tr>
						</Thead>

						<Tbody>
							{[...Array(10)].map((data, index) => (
								<Tr key={index}>
									<Td>
										<Stack align="center" direction="row" spacing={3}>
											<Avatar size="sm" name="Eugene Vista" />
											<Text>Eugene Vista</Text>
										</Stack>
									</Td>
									<Td textAlign="center">09/20/2022</Td>
									<Td textAlign="center">
										<Stack justify="center" direction="row" spacing={3}>
											<Text>8:00 AM</Text>
											<Badge colorScheme="blue">On Time</Badge>
										</Stack>
									</Td>
									<Td textAlign="center">
										<Stack justify="center" direction="row" spacing={3}>
											<Text>9:00 PM</Text>
											<Badge colorScheme="green">Overtime</Badge>
										</Stack>
									</Td>
									<Td textAlign="center">8 Hours</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>

				<Stack justify="space-between" direction="row" p={6}>
					<Box>
						<Select>
							<option>5</option>
							<option>10</option>
							<option>25</option>
						</Select>
					</Box>

					<Stack direction="row" spacing={3}>
						<IconButton icon={<ChevronLeft size={18} />} />
						<IconButton icon={<ChevronRight size={18} />} />
					</Stack>
				</Stack>
			</Card>
		</>
	)
}

Attendance.authentication = {
	required: true
}

export default Attendance
