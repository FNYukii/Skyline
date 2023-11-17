import Post from "@/entities/Post"
import Image from "next/image"
import Link from "next/link"
import { MdOutlineImageNotSupported } from "react-icons/md"

interface Props {
	posts: Post[]
	className?: string
}

function PostListSection(props: Props) {

	return (

		<div className={props.className}>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

				{props.posts.map((post, index) => (

					<div key={index}>

						<div>
							<Link href={`/posts/${post.id}`} className="hover:brightness-90 transition">

								{post.thumbnail !== null &&

									<div className="relative aspect-video bg-gray-200">
										<Image src={post.thumbnail} alt={post.title} className="object-cover" fill priority />
									</div>
								}

								{post.thumbnail === null &&

									<div className="aspect-video flex justify-center items-center bg-gray-200">
										<MdOutlineImageNotSupported className="text-4xl text-gray-400" />
									</div>
								}
							</Link>
						</div>

						<div className="p-4 bg-white">

							<Link href={`/posts/${post.id}`} className="text-lg font-bold hover:underline">{post.title}</Link>
							
							<div className="overflow-hidden text-ellipsis whitespace-nowrap">
								{post.tags.map((tag, index) => (

									<Link href={`/search?tag=${tag}`} key={index} className="mr-2 text-gray-500 hover:underline">{tag}</Link>
								))}

								{post.tags.length === 0 &&
									<p className="text-gray-500">タグはありません</p>
								}
							</div>
						</div>
					</div>
				))}

				{props.posts.length === 0 &&
					<p className="text-gray-500">記事はありません</p>
				}
			</div>
		</div>
	)
}

export default PostListSection