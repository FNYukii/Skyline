"use client"

import Photo from '@/entities/Photo'
import PhotoListItem from './PhotoListItem'

interface Props {
	photos: Photo[]
	className: string
}

export default function PhotoListSection(props: Props) {


	return (

		<div className={props.className}>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1'>

				{props.photos.map((photo, index) => (

					<div key={index}>
						<PhotoListItem photo={photo} />
					</div>
				))}
			</div>
		</div>
	)
}