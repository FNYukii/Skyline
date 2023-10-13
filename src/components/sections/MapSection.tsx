import React from 'react'
import dynamic from 'next/dynamic';

interface Props {
	className?: string
}

function MapSection(props: Props) {

	// 動的インポート
	const Map = React.useMemo(() =>

		dynamic(() => import("../../components/others/Map"), {
			loading: () => <p>Loading...</p>,
			ssr: false,
		}),
		[]
	)

	return (
		<div className={props.className}>

			<h2 className='text-xl font-bold'>マップ</h2>
			<div className='mt-2 aspect-video overflow-hidden border'>
				<Map />
			</div>
		</div>
	)
}

export default MapSection