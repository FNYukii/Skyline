import PostListSection from "@/components/sections/PostListSection"
import PostService from "@/utils/PostService"

export default function Home() {

	// 表示する記事
	const allPosts = PostService.recently10Posts()

	return (

		<PostListSection posts={allPosts} />
	)
}