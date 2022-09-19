import { Grid } from '@chakra-ui/react'
import Welcome from 'components/dashboard/welcome'
import Statistics from 'components/dashboard/statistics'
import Attendance from 'components/dashboard/attendance'
import Accounts from 'components/dashboard/accounts'

const Dashboard = () => {
	return (
		<Grid templateColumns="repeat(12, 1fr)" gap={6}>
			<Welcome />
			<Statistics />
			<Attendance />
			<Accounts />
		</Grid>
	)
}

Dashboard.authentication = {
	required: true,
	authorized: 'Admin',
	destination: '/'
}

export default Dashboard
