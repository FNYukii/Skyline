import Post from "@/entities/Post"
import dayjs from "dayjs"
import { AiOutlineEdit } from "react-icons/ai"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface Props {
	className?: string
	post: Post
}

function PostSection(props: Props) {

	return (

		<div className={props.className}>

			<div className="flex justify-between">

				<h1 className="text-2xl font-bold">{props.post.title}</h1>

				<div className="flex gap-2 items-center">

					<AiOutlineEdit className="text-gray-500 text-lg" />
					<span className="text-gray-500">{dayjs(props.post.createdAt).format("YYYY年M月D日")}</span>
				</div>
			</div>
			<img src={props.post.thumbnail} alt={props.post.title} className="mt-4 aspect-video object-cover" />

			<ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown">{props.post.content}</ReactMarkdown>
		</div>
	)
}

export default PostSection