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

	// ID付きのh2タグ
	function h2WithId({ ...props }) {
		return (
			<h2 id={props.children}>{props.children}</h2>
		)
	}

	return (

		<div className={props.className}>

			<div className="flex justify-between">

				<h1 className="text-2xl font-bold">{props.post.title}</h1>

				<div className="flex gap-2 items-center">

					<AiOutlineEdit className="text-gray-500 text-lg" />

					<span className="text-gray-500">
						{dayjs(props.post.createdAt).format("YYYY年M月D日")}
					</span>
				</div>
			</div>

			<img src={props.post.thumbnail} alt={props.post.title} className="mt-4 aspect-video object-cover" />

			<ReactMarkdown
				children={props.post.content}
				remarkPlugins={[remarkGfm]}
				components={{ h2: h2WithId }} // h2要素をh2WithIdに置き換えて表示
				className="post-content"
			/>
		</div>
	)
}

export default PostSection