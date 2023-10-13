import React from 'react'
import dynamic from 'next/dynamic'

interface Props {
	location: number[]
}

function MapLoader(props: Props) {

	const DynamicMap = dynamic(() => import('./Map'), {
		ssr: false,
	})

	return (
		<DynamicMap location={props.location} />
	)
}

export default MapLoader