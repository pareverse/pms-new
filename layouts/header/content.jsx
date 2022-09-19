import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import { Avatar, Container, Flex, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Logo from 'components/logo'
import { Bell, LogOut, Moon, Settings, Sun, User } from 'react-feather'

const HeaderContent = () => {
	const router = useRouter()
	const { data: session } = useSession()
	const { toggleColorMode } = useColorMode()
	const colorModeIcon = useColorModeValue(<Moon size={18} />, <Sun size={18} />)

	return (
		<Container>
			<Flex align="center" gap={6} h={16}>
				<Flex flex={1} gap={6}>
					<Logo />

					<Stack align="center" direction="row" spacing={6}>
						<NextLink href="/dashboard" passHref>
							<Text as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('dashboard') ? 'brand.500' : 'default'} transition=".4s" _hover={{ color: 'brand.500' }}>
								Dashboard
							</Text>
						</NextLink>

						<NextLink href="/attendance" passHref>
							<Text as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('attendance') ? 'brand.500' : 'default'} transition=".4s" _hover={{ color: 'brand.500' }}>
								Attendance
							</Text>
						</NextLink>

						<NextLink href="/payroll" passHref>
							<Text as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('payroll') ? 'brand.500' : 'default'} transition=".4s" _hover={{ color: 'brand.500' }}>
								Payroll
							</Text>
						</NextLink>

						<NextLink href="/employees" passHref>
							<Text as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('employees') ? 'brand.500' : 'default'} transition=".4s" _hover={{ color: 'brand.500' }}>
								Employees
							</Text>
						</NextLink>

						<NextLink href="/settings" passHref>
							<Text as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('settings') ? 'brand.500' : 'default'} transition=".4s" _hover={{ color: 'brand.500' }}>
								Settings
							</Text>
						</NextLink>
					</Stack>
				</Flex>

				<Flex gap={3}>
					<Stack direction="row" spacing={1}>
						<IconButton variant="ghost" icon={<Bell size={18} />} />
						<IconButton variant="ghost" icon={colorModeIcon} onClick={toggleColorMode} />
					</Stack>

					<Menu closeOnSelect={false}>
						<MenuButton>
							<Avatar size="sm" name={session.user.name} src={session.user.image} />
						</MenuButton>

						<MenuList>
							<MenuItem icon={<User size={16} />}>Profile</MenuItem>
							<MenuItem icon={<Settings size={16} />}>Settings</MenuItem>
							<MenuDivider />
							<MenuItem icon={<LogOut size={16} />} onClick={() => signOut()}>
								Sign Out
							</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</Flex>
		</Container>
	)
}

export default HeaderContent
