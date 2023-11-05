import Page from "@/components/others/Page"
import PostListSection from "@/components/sections/PostListSection"
import SearchSection from "@/components/sections/SearchSection"
import fs from 'fs'
import Post from "@/entities/Post"
import dayjs from "dayjs"
import TagListSection from "@/components/sections/TagListSection"
import TagService from "@/utilities/TagService"
import PostService from "@/utilities/PostService"

function getStaticProps() {

	// postsフォルダ内のファイルのファイル名をすべて取得
	const fileNames = fs.readdirSync('posts')

	// posts配列を生成
	let posts: Post[] = []
	fileNames.forEach(fileName => {

		// ベース名(ファイル名から拡張子を除去したもの)
		const baseName = fileName.replace(/\.md$/, '')

		// ベース名を元にPostを生成
		const post = PostService.postFromBaseName(baseName)
		posts.push(post)
	})

	// postsを新しい順に並べ替え
	posts.sort((a, b) => dayjs(b.createdAt).toDate().valueOf() - dayjs(a.createdAt).toDate().valueOf())

	// 最新の10件だけ残す
	posts.length = 10

	// postsをHomeコンポーネントに渡す
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
		</Page>
	)
}

export { getStaticProps }
export default Home