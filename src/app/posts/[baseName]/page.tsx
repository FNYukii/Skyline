import BackButton from '@/components/others/BackButton'
import PostSection from '@/components/sections/PostSection'
import TableOfContentsSection from '@/components/sections/TableOfContentsSection'
import TagListSection from '@/components/sections/TagListSection'
import PostService from '@/utils/PostService'

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

			<div className="w-full md:w-2/3 mt-12">

				<PostSection post={post} />

				<div className="mt-8 flex justify-center">

					<BackButton />
				</div>
			</div>

			<div className="hidden md:block md:w-1/3 mt-4 pl-8">

				<div className='sticky pt-8 top-0'>

					<TableOfContentsSection content={post.content} />
					<TagListSection label="タグ" tags={post.tags} className='mt-4' />
				</div>
			</div>
		</div>
	)
}