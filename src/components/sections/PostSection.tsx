import Post from "@/entities/Post"
import ReactMarkdown from "react-markdown"

interface Props {
	className?: string
	post: Post
}

function PostSection(props: Props) {

	return (

		<div className={props.className}>

			<h1 className="text-2xl font-bold">{props.post.title}</h1>
			<img src={props.post.thumbnail} alt={props.post.title} className="mt-4 aspect-video object-cover" />
			
			<ReactMarkdown className="markdown">{props.post.content}</ReactMarkdown>
		</div>
	)
}

export default PostSection