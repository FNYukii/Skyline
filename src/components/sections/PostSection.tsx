import Post from "@/entities/Post"

interface Props {
	className?: string
	post: Post
}

function PostSection(props: Props) {

	return (

		<div className={props.className}>

			<h1 className="text-2xl font-bold">{props.post.data.title}</h1>
			<p>Article here</p>
		</div>
	)
}

export default PostSection