import React from 'react'

interface Props {
	className?: string
}

function MapSection(props: Props) {

	return (

		<div className={props.className}>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.036691815394!2d135.49216527574464!3d34.70425447291842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e68f07000001%3A0xa684e6b145ca9d5!2z44Kw44Op44Oz44OV44Ot44Oz44OI5aSn6Ziq!5e0!3m2!1sja!2sis!4v1697087937753!5m2!1sja!2sis"
				width="100%"
				height="450"
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			/>
		</div>
	)
}

export default MapSection