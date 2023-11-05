type Post = {

	id: string
	title: string
	tags: string[]
	createdAt: string
	thumbnail: string | null
	location: number[] | null
	content: string
}

export default Post