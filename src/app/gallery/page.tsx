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

			<button className="block mt-12 mx-auto   py-2 px-16   border border-gray-300   hover:bg-gray-200 transition">もっと読み込む</button>
		</div>
	)
}