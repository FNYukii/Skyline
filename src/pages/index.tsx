import Page from "@/components/others/Page"
import PostListSection from "@/components/sections/PostListSection"
import SearchSection from "@/components/sections/SearchSection"
import fs from 'fs'
import matter from 'gray-matter'
import Post from "@/entities/Post"
import dayjs from "dayjs"
import TagListSection from "@/components/sections/TagListSection"
import TagService from "@/utilities/TagService"

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

				<div className="flex">

					<div className="w-2/3 mt-12">
						<PostListSection posts={props.posts} />
					</div>

					<div className="w-1/3 mt-4 pl-8">

						<div className="pt-8 sticky top-0">
							<SearchSection />
							<TagListSection label="最近のタグ" className="mt-4" tags={TagService.recentlyTags(props.posts)} />
							<TagListSection label="全てのタグ" className="mt-4" tags={TagService.allTags(props.posts)} />
						</div>
					</div>
				</div>
			</main>
		</Page>
	)
}

export { getStaticProps }
export default Home