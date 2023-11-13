import PostListSection from "@/components/sections/PostListSection"
import SearchBar from "@/components/sections/SearchBar"
import TagListSection from "@/components/sections/TagListSection"
import PostService from "@/utilities/PostService"
import TagService from "@/utilities/TagService"
import Link from "next/link"

export default function Home() {

	// 表示する記事
	const posts = PostService.recently10Posts()

	// タグ
	const allTags = TagService.allTags()
	const recentlyTags = TagService.recentlyTags()

	return (

		<div className="flex">

			<div className="w-2/3 mt-12">

				<PostListSection posts={posts} />

				{posts.length > 10 &&

					<div className="mt-16 flex justify-center">

						<Link href="/all" className="py-2 px-16 border border-gray-300 hover:bg-gray-200 transition">全ての記事</Link>
					</div>
				}
			</div>

			<div className="w-1/3 mt-4 pl-8">

				<div className="pt-8 sticky top-0">
					<SearchBar />
					<TagListSection label="最近のタグ" className="mt-4" tags={recentlyTags} />
					<TagListSection label="全てのタグ" className="mt-4" tags={allTags} />
				</div>
			</div>
		</div>
	)
}