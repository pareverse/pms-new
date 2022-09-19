import { Avatar, Box, Button, IconButton, Input, LightMode, Modal, ModalContent, ModalOverlay, Select, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import Card from 'components/card'
import { ChevronLeft, ChevronRight, Eye } from 'react-feather'

const Employees = () => {
	const { isOpen: isOpenPos, onOpen: onOpenPos, onClose: onClosePos } = useDisclosure()
	const { isOpen: isOpenWH, onOpen: onOpenWH, onClose: onCloseWH } = useDisclosure()
	const { isOpen: isOpenDeduc, onOpen: onOpenDeduc, onClose: onCloseDeduc } = useDisclosure()
	const { isOpen: isOpenNew, onOpen: onOpenNew, onClose: onCloseNew } = useDisclosure()

	return (
		<>
			<Text fontSize="4xl" fontWeight="bold" mb={6}>
				Employees
			</Text>
			<Card>
				<Stack justify="space-between" direction="row" p={6}>
					<Box>
						<Input placeholder="Search..." />
					</Box>

					<Stack direction="row" spacing={3}>
						<Button onClick={onOpenPos}>Add Position</Button>
						<Button onClick={onOpenWH}>Add Work Hours</Button>
						<Button onClick={onOpenDeduc}>Add Deduction</Button>

						<LightMode>
							<Button colorScheme="brand" onClick={onOpenNew}>
								Add New
							</Button>
						</LightMode>
					</Stack>
				</Stack>

				<TableContainer>
					<Table>
						<Thead>
							<Tr>
								<Th>ID</Th>
								<Th>Name</Th>
								<Th>Email</Th>
								<Th textAlign="center">Work Hours</Th>
								<Th textAlign="center">Position</Th>
								<Th textAlign="center">Pay/Hour</Th>
								<Th textAlign="center">Deduction</Th>
								<Th textAlign="right"></Th>
							</Tr>
						</Thead>

						<Tbody>
							{[...Array(5)].map((data, index) => (
								<Tr key={index}>
									<Td>683523</Td>

									<Td>
										<Stack align="center" direction="row" spacing={3}>
											<Avatar size="sm" name="Cuanico" />
											<Text>Carlyzamae Cuanico</Text>
										</Stack>
									</Td>
									<Td>cuanico@gmail.com</Td>
									<Td textAlign="center">8:00 AM - 8:00 PM</Td>
									<Td textAlign="center">Cashier</Td>
									<Td textAlign="center">₱100.00</Td>

									<Td textAlign="center">₱50.00</Td>
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

			<Modal size="sm" isOpen={isOpenPos} onClose={onClosePos}>
				<ModalOverlay />
				<ModalContent bg="bg-surface" p={6}>
					<Stack spacing={6}>
						<Text fontSize="lg" fontWeight="medium">
							Add Position
						</Text>

						<Input placeholder="Name" />
						<Input placeholder="Pay/Hour" />

						<Stack justify="end" direction="row" spacing={3}>
							<LightMode>
								<Button colorScheme="brand">Submit</Button>
							</LightMode>

							<Button onClick={onClosePos}>Cancel</Button>
						</Stack>
					</Stack>
				</ModalContent>
			</Modal>

			<Modal size="sm" isOpen={isOpenPos} onClose={onClosePos}>
				<ModalOverlay />
				<ModalContent bg="bg-surface" p={6}>
					<Stack spacing={6}>
						<Text fontSize="lg" fontWeight="medium">
							Add Position
						</Text>

						<Input placeholder="Name" />
						<Input placeholder="Pay/Hour" />

						<Stack justify="end" direction="row" spacing={3}>
							<LightMode>
								<Button colorScheme="brand">Submit</Button>
							</LightMode>

							<Button onClick={onClosePos}>Cancel</Button>
						</Stack>
					</Stack>
				</ModalContent>
			</Modal>

			<Modal size="sm" isOpen={isOpenWH} onClose={onCloseWH}>
				<ModalOverlay />
				<ModalContent bg="bg-surface" p={6}>
					<Stack spacing={6}>
						<Text fontSize="lg" fontWeight="medium">
							Add Work Hours
						</Text>

						<Input type="time" />
						<Input type="time" />

						<Stack justify="end" direction="row" spacing={3}>
							<LightMode>
								<Button colorScheme="brand">Submit</Button>
							</LightMode>

							<Button onClick={onCloseWH}>Cancel</Button>
						</Stack>
					</Stack>
				</ModalContent>
			</Modal>

			<Modal size="sm" isOpen={isOpenDeduc} onClose={onCloseDeduc}>
				<ModalOverlay />
				<ModalContent bg="bg-surface" p={6}>
					<Stack spacing={6}>
						<Text fontSize="lg" fontWeight="medium">
							Add Deduction
						</Text>

						<Input placeholder="Name" />
						<Input placeholder="Amount" />

						<Stack justify="end" direction="row" spacing={3}>
							<LightMode>
								<Button colorScheme="brand">Submit</Button>
							</LightMode>

							<Button onClick={onCloseDeduc}>Cancel</Button>
						</Stack>
					</Stack>
				</ModalContent>
			</Modal>

			<Modal size="sm" isOpen={isOpenNew} onClose={onCloseNew}>
				<ModalOverlay />
				<ModalContent bg="bg-surface" p={6}>
					<Stack spacing={6}>
						<Text fontSize="lg" fontWeight="medium">
							Add Employee
						</Text>

						<Input placeholder="Email Address" />

						<Stack justify="end" direction="row" spacing={3}>
							<LightMode>
								<Button colorScheme="brand">Submit</Button>
							</LightMode>

							<Button onClick={onCloseNew}>Cancel</Button>
						</Stack>
					</Stack>
				</ModalContent>
			</Modal>
		</>
	)
}

Employees.authentication = {
	required: true
}

export default Employees
