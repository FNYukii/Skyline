import Page from '@/components/others/Page'
import PostSection from '@/components/sections/PostSection'
import SearchSection from '@/components/sections/SearchSection'
import TableOfContentsSection from '@/components/sections/TableOfContentsSection'
import TagListSection from '@/components/sections/TagListSection'
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
		title: title,
		tags: tags,
		date: date,
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

				<div className="mt-12 flex">

					<div className="w-2/3">

						<PostSection post={props.post} />
					</div>

					<div className="w-1/3 pl-8">

						<TableOfContentsSection />
						<TagListSection label={'関連タグ'} tags={props.post.tags} className='mt-4' />

						<SearchSection className='mt-12' />
						<TagListSection label="人気のタグ" className='mt-4' tags={["うめきた", "阪神電車", "近畿日本鉄道", "百貨店", "オフィスビル", "鉄筋鉄骨コンクリート造", "大阪市", "梅田", "住友不動産", "シティタワー"]} />
						<TagListSection label="全てのタグ" className='mt-4' tags={["大阪市", "梅田", "住友不動産", "シティタワー", "ガーデン", "UR都市機構", "阪急阪神不動産", "ジオ", "ジオグランデ", "ジオタワー", "京都", "JR西日本", "ホテルグランヴィア", "JR西日本ホテルズ", "ブリリア", "東京建物", "森ビル", "東京", "新宿", "渋谷", "六本木", "虎ノ門", "赤坂", "病院", "ホテル", "外資系ホテル", "ヒルトン", "ウォルドーフ・アストリア", "コンラッド", "ダブルツリーbyヒルトン", "谷町", "天満橋", "大阪市北区", "大阪市中央区", "東京都港区", "大阪市淀川区", "阪急電鉄", "うめきた", "阪神電車", "近畿日本鉄道", "百貨店", "オフィスビル", "鉄筋鉄骨コンクリート造"]} />
					</div>
				</div>
			</main>

		</Page>
	)
}

export { getStaticPaths, getStaticProps }
export default PostPage