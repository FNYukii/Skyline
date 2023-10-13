import Page from '@/components/others/Page'
import MapSection from '@/components/sections/MapSection'
import PostSection from '@/components/sections/PostSection'
import SearchSection from '@/components/sections/SearchSection'
import TableOfContentsSection from '@/components/sections/TableOfContentsSection'
import TagListSection from '@/components/sections/TagListSection'
import Post from '@/entities/Post'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'

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

	// ファイル内のテキストを取り出す
	const textInFile = fs.readFileSync(`posts/${baseName}.md`, 'utf-8')

	// ファイル内のテキストをdataとContentに分離
	const { data, content } = matter(textInFile)

	// dataオフジェクトからtitle, tags, date, thumbnailプロパティの値を取り出す
	const title: string = data.title
	const tags: string[] = data.tags
	const createdAt: string = data.createdAt
	const thumbnail: string = data.thumbnail

	// ファイルのベース名をidとして、postオブジェクトを生成
	const post: Post = {
		id: baseName,
		title: title,
		tags: tags,
		createdAt: createdAt,
		thumbnail: thumbnail,
		content: content
	}

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

			<main className="w-full lg:width-lg px-4 lg:px-0 mx-auto">

				<div className="flex">

					<div className="w-2/3 mt-12">

						<PostSection post={props.post} />

						<MapSection className='mt-6' />

						<div className="mt-20 flex justify-center">
							<Link href="/" className="py-2 px-24 border border-gray-300 hover:bg-gray-100 transition">トップへ戻る</Link>
						</div>
					</div>

					<div className="w-1/3 mt-4 pl-8">

						<div className='sticky pt-8 top-0'>

							<TableOfContentsSection content={props.post.content} />
							<TagListSection label={'関連タグ'} tags={props.post.tags} className='mt-4' />
						</div>
					</div>
				</div>
			</main>
		</Page>
	)
}

export { getStaticPaths, getStaticProps }
export default PostPage