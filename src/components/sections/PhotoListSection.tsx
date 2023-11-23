import Photo from '@/entities/Photo'
import Image from 'next/image'

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

						<div className="relative aspect-video bg-gray-200   hover:brightness-90 transition">
							<Image src={photo.src} alt={photo.alt} className="object-cover" fill priority />
						</div>
					</div>
				))}
			</div>
		</div>
	)
}