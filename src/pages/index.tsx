import Page from "@/components/sections/Page"
import PostListSection from "@/components/sections/PostListSection"
import SearchSection from "@/components/sections/SearchSection"
import AllTagListSection from "@/components/sections/AllTagListSection"
import HotTagListSection from "@/components/sections/HotTagListSection"

import fs from 'fs'
import matter from 'gray-matter'
import Post from "@/entities/Post"

export const getStaticProps = () => {

	// postsフォルダ内のファイル名をすべて取得
	const fileNames = fs.readdirSync('posts')

	// posts配列を生成
	const posts = fileNames.map((fileName) => {

		// ベース名(ファイル名から拡張子を除去したもの)
		const baseName = fileName.replace(/\.md$/, '')

		// ファイル内のテキスト
		const textInFile = fs.readFileSync(`posts/${fileName}`, 'utf-8')

		// ファイル内のテキストをdataとContentに分離
		const { data, content } = matter(textInFile)

		// dataオフジェクトにtitle, tags, thumbnailプロパティがあることを確認する
		const title: string = data.title
		const tags: string[] = data.tags
		const thumbnail: string = data.thumbnail

		// Post型オブジェクトにまとめる
		const post: Post = {
			baseName: baseName,
			data: {title, tags, thumbnail},
			content: content
		}

		return post
	})

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

export default function Home(props: Props) {

	return (

		<Page>

			<main className="w-full lg:width-lg px-4 lg:px-0 mx-auto">

				<div className="mt-12 flex">

					<div className="w-2/3">
						<PostListSection posts={props.posts}/>
					</div>

					<div className="w-1/3 pl-8">

						<SearchSection />
						<HotTagListSection className="mt-4" />
						<AllTagListSection className="mt-4" />
					</div>
				</div>
			</main>
		</Page>
	)
}
