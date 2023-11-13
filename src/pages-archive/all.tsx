import Page from "@/components/others/Page"
import PostListSection from "@/components/sections/PostListSection"
import SearchBar from "@/components/sections/SearchBar"
import Post from "@/entities/Post"
import TagListSection from "@/components/sections/TagListSection"
import TagService from "@/utilities/TagService"
import PostService from "@/utilities/PostService"

function getStaticProps() {

	// リストに表示するPost
	const posts = PostService.allPosts()

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

function All(props: Props) {

	return (

		<Page title="全ての記事 - Skyline">

			<div className="flex">

				<div className="w-2/3 mt-12">

					<h1 className="font-bold text-2xl">全ての記事</h1>

					<PostListSection className="mt-4" posts={props.posts} />
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
export default All