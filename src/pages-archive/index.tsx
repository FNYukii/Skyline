import Page from "@/components/others/Page"
import PostListSection from "@/components/sections/PostListSection"
import SearchBar from "@/components/sections/SearchBar"
import Post from "@/entities/Post"
import TagListSection from "@/components/sections/TagListSection"
import TagService from "@/utilities/TagService"
import PostService from "@/utilities/PostService"
import Link from "next/link"

function getStaticProps() {

	// リストに表示するPost
	const posts = PostService.recently10Posts()

	// タグ
	const allTags = TagService.allTags()
	const recentlyTags = TagService.recentlyTags()

	// postsをHomeコンポーネントに渡す
	return {
		props: {
			posts,
			allTags,
			recentlyTags
		},
	}
}


interface Props {
	posts: Post[],
	allTags: string[]
	recentlyTags: string[]
}

function Home(props: Props) {

	return (

		<Page>

			<div className="flex">

				<div className="w-2/3 mt-12">
					<PostListSection posts={props.posts} />

					{props.posts.length > 10 &&

						<div className="mt-16 flex justify-center">

							<Link href="/all" className="py-2 px-16 border border-gray-300 hover:bg-gray-200 transition">全ての記事</Link>
						</div>
					}
				</div>

				<div className="w-1/3 mt-4 pl-8">

					<div className="pt-8 sticky top-0">
						<SearchBar />
						<TagListSection label="最近のタグ" className="mt-4" tags={props.recentlyTags} />
						<TagListSection label="全てのタグ" className="mt-4" tags={props.allTags} />
					</div>
				</div>
			</div>
		</Page>
	)
}

export { getStaticProps }
export default Home