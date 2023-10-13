import React from 'react'
import dynamic from 'next/dynamic'

interface Props {
	className?: string

	location: number[]
}

function MapSection(props: Props) {

	const DynamicMap = dynamic(() => import('../others/Map'), {
		ssr: false,
	})

	return (
		<div className={props.className}>

			<h2 className='text-xl font-bold'>マップ</h2>
			<div className='mt-2 aspect-video border'>
				<DynamicMap location={props.location} />
			</div>
		</div>
	)
}

export default MapSection