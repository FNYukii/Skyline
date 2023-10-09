import Page from "@/components/others/Page"
import PostListSection from "@/components/sections/PostListSection"
import SearchSection from "@/components/sections/SearchSection"
import fs from 'fs'
import matter from 'gray-matter'
import Post from "@/entities/Post"
import dayjs from "dayjs"
import TagListSection from "@/components/sections/TagListSection"

function getStaticProps() {

	// postsフォルダ内のファイルのファイル名をすべて取得
	const fileNames = fs.readdirSync('posts')

	// posts配列を生成
	let posts: Post[] = []
	fileNames.forEach(fileName => {

		// ベース名(ファイル名から拡張子を除去したもの)
		const baseName = fileName.replace(/\.md$/, '')

		// ファイル内のテキスト
		const textInFile = fs.readFileSync(`posts/${fileName}`, 'utf-8')

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

		posts.push(post)
	})

	// posts配列内の要素を並べ替え
	posts.sort((a, b) => dayjs(b.createdAt).toDate().valueOf() - dayjs(a.createdAt).toDate().valueOf())

	// 開発中はpostsの要素数が少ないのでかさ増し
	posts = posts.concat(posts)
	posts = posts.concat(posts)

	// 生成したposts配列をHomeコンポーネントに渡す
	return {
		props: {
			posts,
		},
	}
}


interface Props {
	posts: Post[],
}

function Home(props: Props) {

	return (

		<Page>

			<main className="w-full lg:width-lg px-4 lg:px-0 mx-auto">

				<div className="mt-12 flex">

					<div className="w-2/3">
						<PostListSection posts={props.posts} />
					</div>

					<div className="w-1/3 pl-8">

						<SearchSection />
						<TagListSection label="人気のタグ" className="mt-4" tags={["うめきた", "阪神電車", "近畿日本鉄道", "百貨店", "オフィスビル", "鉄筋鉄骨コンクリート造", "大阪市", "梅田", "住友不動産", "シティタワー"]}/>
						<TagListSection label="全てのタグ" className="mt-4" tags={["大阪市", "梅田", "住友不動産", "シティタワー", "ガーデン", "UR都市機構", "阪急阪神不動産", "ジオ", "ジオグランデ", "ジオタワー", "京都", "JR西日本", "ホテルグランヴィア", "JR西日本ホテルズ", "ブリリア", "東京建物", "森ビル", "東京", "新宿", "渋谷", "六本木", "虎ノ門", "赤坂", "病院", "ホテル", "外資系ホテル", "ヒルトン", "ウォルドーフ・アストリア", "コンラッド", "ダブルツリーbyヒルトン", "谷町", "天満橋", "大阪市北区", "大阪市中央区", "東京都港区", "大阪市淀川区", "阪急電鉄", "うめきた", "阪神電車", "近畿日本鉄道", "百貨店", "オフィスビル", "鉄筋鉄骨コンクリート造"]}/>
					</div>
				</div>
			</main>
		</Page>
	)
}

export { getStaticProps }
export default Home