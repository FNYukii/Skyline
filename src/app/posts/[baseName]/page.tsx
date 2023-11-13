import PostSection from '@/components/sections/PostSection'
import TableOfContentsSection from '@/components/sections/TableOfContentsSection'
import TagListSection from '@/components/sections/TagListSection'
import PostService from '@/utilities/PostService'

export async function generateMetadata({ params }: { params: { baseName: string } }) {

	// 表示する記事
	const baseName = params.baseName
	const post = PostService.postFromBaseName(baseName)

	return {
		title: `${post.title} - Skyline`
	}
}

export default function PostPage({ params }: { params: { baseName: string } }) {

	// 表示する記事
	const baseName = params.baseName
	const post = PostService.postFromBaseName(baseName)

	return (

		<div className="flex">

			<div className="w-2/3 mt-12">

				<PostSection post={post} />

				<div className="mt-8 flex justify-center">

					{/* <button onClick={() => router.back()} className="py-2 px-16 border border-gray-300 hover:bg-gray-200 transition">戻る</button> */}
				</div>
			</div>

			<div className="w-1/3 mt-4 pl-8">

				<div className='sticky pt-8 top-0'>

					<TableOfContentsSection content={post.content} />
					<TagListSection label={'関連タグ'} tags={post.tags} className='mt-4' />
				</div>
			</div>
		</div>
	)
}