import Page from "@/components/others/Page"
import PostListSection from "@/components/sections/PostListSection"
import SearchBar from "@/components/sections/SearchBar"
import fs from 'fs'
import Post from "@/entities/Post"
import dayjs from "dayjs"
import TagListSection from "@/components/sections/TagListSection"
import TagService from "@/utilities/TagService"
import PostService from "@/utilities/PostService"

function getStaticProps() {

	// 最新のPostを10件取得
	const posts = PostService.recently10Posts()

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
						<SearchBar />
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