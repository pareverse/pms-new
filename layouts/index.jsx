import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { Container, Flex, Spinner } from '@chakra-ui/react'
import Header from './header'

const Loaders = () => {
	return (
		<Flex justify="center" align="center" h="100vh" w="full">
			<Spinner thickness={4} speed="0.8s" emptyColor="gray.200" color="brand.500" size="xl" />
		</Flex>
	)
}

const AppLayout = ({ children, authentication }) => {
	const router = useRouter()
	const { data: session, status } = useSession()

	if (status === 'loading') return <Loaders />

	if (session) {
		if (router.pathname === '/login') {
			router.push('/')
			return <Loaders />
		}

		if (router.pathname === '/') {
			if (session.user.role === 'Admin') {
				router.push('/dashboard')
				return
			}
		}

		if (authentication.authorized && authentication.authorized !== session.user.role) {
			router.push(authentication.destination)
			return
		}

		return (
			<>
				<Header />
				<Container py={6}>{children}</Container>
			</>
		)
	} else {
		if (authentication && authentication.required) {
			router.push('/login')
			return <Loaders />
		}

		return children
	}
}

export default AppLayout
