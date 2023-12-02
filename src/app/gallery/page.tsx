import PhotoListSection from '@/components/sections/PhotoListSection'
import PhotoService from '@/utils/PhotoService'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Gallery - Skyline'
}

export default function Page() {

	const photos = PhotoService.allPhotos()

	return (

		<div>
			<h1 className='mt-12 text-2xl font-bold'>ギャラリー</h1>

			<PhotoListSection photos={photos} className='mt-4' />
		</div>
	)
}