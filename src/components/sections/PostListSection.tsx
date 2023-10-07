import Post from "@/entities/Post"
import Link from "next/link"

interface Props {
	posts: Post[]
	className?: string
}

function PostListSection(props: Props) {

	return (

		<div className={props.className}>

			<div className="grid grid-cols-2 gap-8">

				{props.posts.map((post, index) => (

					<div key={index}>

						<div>
							<Link href={`/posts/${post.baseName}`} className="hover:brightness-90 transition">

								<img src={post.data.thumbnail} alt={post.data.title} className="aspect-video object-cover" />
							</Link>
						</div>

						<div className="mt-2">
							<Link href={`/posts/${post.baseName}`} className="text-lg font-bold hover:underline">{post.data.title}</Link>
						</div>

						<div className="text-gray-500 flex gap-2">
							{post.data.tags.map((tag, index) => (

								<button key={index} className="hover:underline">{tag}</button>
							))}
						</div>
					</div>
				))}
			</div>

			<div className="flex justify-center">

				<button className="mt-12 py-2 px-24 border border-gray-300 hover:bg-gray-100 transition">もっと見る</button>
			</div>
		</div>
	)
}

export default PostListSection