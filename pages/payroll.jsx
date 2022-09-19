import { Avatar, Box, Button, IconButton, Input, LightMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import Card from 'components/card'
import { ChevronLeft, ChevronRight, Eye } from 'react-feather'

const Payroll = () => {
	return (
		<>
			<Text fontSize="4xl" fontWeight="bold" mb={6}>
				Payroll
			</Text>
			<Card>
				<Stack justify="space-between" direction="row" p={6}>
					<Box>
						<Input placeholder="Search..." />
					</Box>

					<Stack direction="row" spacing={3}>
						<Button variant="outline">History</Button>

						<LightMode>
							<Button colorScheme="brand">Print</Button>
						</LightMode>
					</Stack>
				</Stack>

				<TableContainer>
					<Table>
						<Thead>
							<Tr>
								<Th>Employee</Th>
								<Th textAlign="center">Position</Th>
								<Th textAlign="center">Pay/Hour</Th>
								<Th textAlign="center">Total Hours Worked</Th>
								<Th textAlign="center">Gross Pay</Th>
								<Th textAlign="center">Deduction</Th>
								<Th textAlign="center">Net Pay</Th>
								<Th textAlign="right"></Th>
							</Tr>
						</Thead>

						<Tbody>
							{[...Array(5)].map((data, index) => (
								<Tr key={index}>
									<Td>
										<Stack align="center" direction="row" spacing={3}>
											<Avatar size="sm" name="Cristal Releve" />
											<Text>Cristal Releve</Text>
										</Stack>
									</Td>

									<Td textAlign="center">Waiter</Td>
									<Td textAlign="center">₱100.00</Td>
									<Td textAlign="center">8 Hours</Td>
									<Td textAlign="center">₱800.00</Td>
									<Td textAlign="center">- ₱50.00</Td>
									<Td textAlign="center">₱750.00</Td>
									<Td textAlign="right">
										<IconButton variant="outline" size="sm" icon={<Eye size={14} />} />
									</Td>
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

Payroll.authentication = {
	required: true
}

export default Payroll
