import ImageService from '@/utils/ImageService'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
	title: 'Gallery - Skyline'
}

export default function Page() {

	const imagePaths = ImageService.allImagePaths()

	return (

		<div>
			<h1 className='mt-12 text-2xl font-bold'>ギャラリー</h1>

			<div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

				{imagePaths.map((imagePath, index) => (

					<div key={index} className="relative aspect-video bg-gray-200   hover:brightness-90 hover:cursor-pointer transition">
						<Image src={imagePath} alt="ビル" className="object-cover" fill priority />
					</div>
				))}
			</div>

			<button className="block mt-12 mx-auto   py-2 px-16   border border-gray-300   hover:bg-gray-200 transition">もっと読み込む</button>
		</div>
	)
}