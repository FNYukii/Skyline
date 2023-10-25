import Post from "@/entities/Post"
import Image from "next/image"
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
							<Link href={`/posts/${post.id}`} className="hover:brightness-90 transition">

								<div className="relative aspect-video bg-gray-200">

									<Image src={post.thumbnail} alt={post.title} className="object-cover" fill />
								</div>
							</Link>
						</div>

						<div className="p-4 bg-white">

							<Link href={`/posts/${post.id}`} className="text-lg font-bold hover:underline">{post.title}</Link>


							<div className="overflow-hidden text-ellipsis whitespace-nowrap">
								{post.tags.map((tag, index) => (

									<button key={index} className="mr-2 text-gray-500 hover:underline">{tag}</button>
								))}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="flex justify-center">

				<button className="mt-16 py-2 px-24 border border-gray-300 hover:bg-gray-200 transition">もっと見る</button>
			</div>
		</div>
	)
}

export default PostListSection