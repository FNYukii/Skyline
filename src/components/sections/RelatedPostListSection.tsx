import Post from "@/entities/Post"
import PostService from "@/utils/PostService"
import dayjs from "dayjs"
import Image from "next/image"
import Link from "next/link"
import { MdOutlineImageNotSupported } from "react-icons/md"

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

				<div className="mt-2 flex flex-col gap-4">

					{relatedPosts.map((post, index) => (

						<div key={index} className="flex gap-2">
							
							<div>
								<Link href={`/posts/${post.id}`} className="hover:brightness-90 transition">

									{post.thumbnail !== null &&

										<div className="h-16 aspect-square   relative bg-gray-200">
											<Image src={post.thumbnail} alt={post.title} className="object-cover" fill />
										</div>
									}

									{post.thumbnail === null &&

										<div className="h-16 aspect-square bg-gray-200  flex justify-center items-center">
											<MdOutlineImageNotSupported className="text-xl text-gray-400" />
										</div>
									}
								</Link>
							</div>

							<div className="overflow-hidden text-ellipsis whitespace-nowrap">

								<Link href={`/posts/${post.id}`} className="hover:underline">{post.title}</Link>
								<p className="text-gray-500">{dayjs(post.createdAt).format("YYYY年M月D日")}</p>
							</div>
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