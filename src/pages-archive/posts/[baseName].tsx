import Page from '@/components/others/Page'
import PostSection from '@/components/sections/PostSection'
import TableOfContentsSection from '@/components/sections/TableOfContentsSection'
import TagListSection from '@/components/sections/TagListSection'
import Post from '@/entities/Post'
import PostService from '@/utilities/PostService'
import fs from 'fs'
import Router from 'next/router'

function getStaticPaths() {

	// mdファイル一覧を取得
	const fileNames = fs.readdirSync('posts')

	// 記事ページのpath情報を作成
	const paths = fileNames.map((fileName) => {

		const baseName = fileName.replace(/\.md$/, '')

		const params = {
			baseName: baseName
		}

		return { params }
	})

	// getStaticPropsに渡す
	return {
		paths,
		fallback: false
	}
}

function getStaticProps({ params }: any) {

	// 表示する記事のmdファイルのベース名を取得
	const baseName = params.baseName

	// ファイル名を元にPostを生成
	const post = PostService.postFromBaseName(baseName)

	// PostPageコンポーネントに渡す
	return {
		props: {
			post
		}
	}
}


interface Props {
	post: Post
}

function PostPage(props: Props) {

	return (

		<Page title={`${props.post.title} - Skyline`}>

			<div className="flex">

				<div className="w-2/3 mt-12">

					<PostSection post={props.post} />

					<div className="mt-8 flex justify-center">

						<button onClick={() => Router.back()} className="py-2 px-16 border border-gray-300 hover:bg-gray-200 transition">戻る</button>
					</div>
				</div>

				<div className="w-1/3 mt-4 pl-8">

					<div className='sticky pt-8 top-0'>

						<TableOfContentsSection content={props.post.content} />
						<TagListSection label={'関連タグ'} tags={props.post.tags} className='mt-4' />
					</div>
				</div>
			</div>
		</Page>
	)
}

export { getStaticPaths, getStaticProps }
export default PostPage