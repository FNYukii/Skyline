"use client"

import Photo from '@/entities/Photo'
import Image from 'next/image'
import { useState } from 'react'
import PhotoModal from '../others/PhotoModal'

interface Props {
	photos: Photo[]
	className: string
}

export default function PhotoListSection(props: Props) {

	const [isOpenModal, setIsOpenModal] = useState(false)

	return (

		<div className={props.className}>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1'>

				{props.photos.map((photo, index) => (

					<div key={index}>

						<div onClick={() => setIsOpenModal(true)} className="relative aspect-video bg-gray-200   hover:brightness-90 transition">
							<Image src={photo.src} alt={photo.alt} className="object-cover" fill priority />
						</div>

						{isOpenModal &&
							<PhotoModal photo={photo} onClose={setIsOpenModal(false)} />
						}
					</div>
				))}
			</div>
		</div>
	)
}