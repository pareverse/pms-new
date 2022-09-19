const baseStyle = {
	textTransform: 'normal',
	fontWeight: 'medium',
	borderRadius: '2xl'
}

const variants = {
	solid: {
		color: 'white'
	}
}

const sizes = {
	sm: {
		fontSize: 'xs',
		px: '2',
		py: '.5'
	}
}

const defaultProps = {
	size: 'sm',
	variant: 'solid'
}

export default {
	baseStyle,
	variants,
	sizes,
	defaultProps
}
