const Home = () => {
	return <>Home</>
}

Home.authentication = {
	required: true,
	authorized: 'Employee',
	destination: '/401'
}

export default Home
