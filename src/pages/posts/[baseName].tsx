import AllTagListSection from '@/components/sections/AllTagListSection'
import HotTagListSection from '@/components/sections/HotTagListSection'
import Page from '@/components/sections/Page'
import PostTagListSection from '@/components/sections/PostTagListSection'
import SearchSection from '@/components/sections/SearchSection'
import TableOfContentsSection from '@/components/sections/TableOfContentsSection'
import Post from '@/entities/Post'
import fs from 'fs'
import matter from 'gray-matter'

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
	const date: string = data.date
	const thumbnail: string = data.thumbnail

	// ファイルのベース名をidとして、postオブジェクトを生成
	const post: Post = {
		id: baseName,
		data: { title, tags, date, thumbnail },
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

		<Page title={`${props.post.data.title} - Skyline`}>

			<main className="w-full lg:width-lg px-4 lg:px-0 mx-auto">

				<div className="mt-12 flex">

					<div className="w-2/3">
						<p>Article here</p>
					</div>

					<div className="w-1/3 pl-8">

						<TableOfContentsSection />

						<PostTagListSection tags={props.post.data.tags} className='mt-4' />

						<SearchSection className='mt-12' />
						<HotTagListSection className="mt-4" />
						<AllTagListSection className="mt-4" />
					</div>
				</div>
			</main>

		</Page>
	)
}

export { getStaticPaths, getStaticProps }
export default PostPage