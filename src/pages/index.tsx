import Page from "@/components/sections/Page"
import PostListSection from "@/components/sections/PostListSection"
import SearchSection from "@/components/sections/SearchSection"
import AllTagListSection from "@/components/sections/AllTagListSection"
import HotTagListSection from "@/components/sections/HotTagListSection"

import fs from 'fs'
import matter from 'gray-matter'
import Post from "@/entities/Post"

export const getStaticProps = () => {

	// postsフォルダ内のファイルをすべて取得
	const fileNames = fs.readdirSync('posts')

	// ファイルの内容をbaseName, data, contentに分けてまとめる
	const posts = fileNames.map((fileName) => {

		// ベース名(ファイル名から拡張子を除去したもの)
		const baseName = fileName.replace(/\.md$/, '')

		// ファイル内のテキスト
		const textInFile = fs.readFileSync(`posts/${fileName}`, 'utf-8')

		// ファイル内のテキストをdataとContentに分離
		const { data, content } = matter(textInFile)

		const post: Post = {
			baseName: baseName,
			data: data,
			content: content
		}

		return post
	})

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
