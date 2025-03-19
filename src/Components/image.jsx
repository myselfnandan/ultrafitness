import PropTypes from 'prop-types'
import { productionCdnPrefix } from '../../cdn-cofig'

function constructFermionCdnUrl(src) {
	return `${productionCdnPrefix}/${encodeURIComponent(
		src.startsWith('/') ? src.slice(1) : src
	)}`
}

export const CustomImage = (props) => {
	const isProduction = process.env.NEXT_PUBLIC_IS_PRODUCTION === 'true'

	if (isProduction && props.src && !props.src.startsWith('http')) {
		return <img {...props} src={constructFermionCdnUrl(props.src)} />
	} else {
		return <img {...props} />
	}
}

// Prop validation
CustomImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
}

export default CustomImage
