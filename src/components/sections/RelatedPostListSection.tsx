import Post from "@/entities/Post"
import PostService from "@/utils/PostService"
import Link from "next/link"

interface Props {
	className?: string
	targetPost: Post
}

function RelatedPostListSection(props: Props) {

	const relatedPosts = PostService.relatedPosts(props.targetPost)

	return (

		<div className={props.className}>

			<div className="p-4 bg-white">

				<p className="font-bold">関連記事</p>

				<div className="mt-2 flex flex-col gap-1">

					{relatedPosts.map((post, index) => (

						<div key={index}>

							<Link href={`/posts/${post.id}`} className="hover:underline">{post.title}</Link>
						</div>
					))}

					{relatedPosts.length === 0 &&
						<p className="text-gray-500">関連する記事はありません</p>
					}
				</div>
			</div>
		</div>
	)
}

export default RelatedPostListSection