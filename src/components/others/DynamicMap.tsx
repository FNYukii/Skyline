import React from 'react'
import dynamic from 'next/dynamic'

interface Props {
	location: number[]
	className?: string
}

function DynamicMap(props: Props) {

	const DynamicMap = dynamic(() => import('./Map'), {
		ssr: false,
	})

	return (
		<DynamicMap location={props.location} className={props.className} />
	)
}

export default DynamicMap