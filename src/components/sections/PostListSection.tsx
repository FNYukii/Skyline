import Link from "next/link"

interface Props {
	className?: string
}

function PostListSection(props: Props) {

	const posts = [
		{
			title: "JPタワー大阪",
			tags: ["大阪", "梅田", "日本郵政", "JPタワー"],
			thumbnail: "https://images.unsplash.com/photo-1443527394413-4b820fd08dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80"
		},
		{
			title: "JPタワー大阪",
			tags: ["大阪", "梅田", "日本郵政", "JPタワー"],
			thumbnail: "https://images.unsplash.com/photo-1443527394413-4b820fd08dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80"
		},
		{
			title: "JPタワー大阪",
			tags: ["大阪", "梅田", "日本郵政", "JPタワー"],
			thumbnail: "https://images.unsplash.com/photo-1443527394413-4b820fd08dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80"
		},
		{
			title: "JPタワー大阪",
			tags: ["大阪", "梅田", "日本郵政", "JPタワー"],
			thumbnail: "https://images.unsplash.com/photo-1443527394413-4b820fd08dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80"
		},
		{
			title: "JPタワー大阪",
			tags: ["大阪", "梅田", "日本郵政", "JPタワー"],
			thumbnail: "https://images.unsplash.com/photo-1443527394413-4b820fd08dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80"
		},
		{
			title: "JPタワー大阪",
			tags: ["大阪", "梅田", "日本郵政", "JPタワー"],
			thumbnail: "https://images.unsplash.com/photo-1443527394413-4b820fd08dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80"
		},
		{
			title: "JPタワー大阪",
			tags: ["大阪", "梅田", "日本郵政", "JPタワー"],
			thumbnail: "https://images.unsplash.com/photo-1443527394413-4b820fd08dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80"
		},
		{
			title: "JPタワー大阪",
			tags: ["大阪", "梅田", "日本郵政", "JPタワー"],
			thumbnail: "https://images.unsplash.com/photo-1443527394413-4b820fd08dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80"
		},
	]

	return (

		<div className={props.className}>

			<div className="grid grid-cols-2 gap-8">

				{posts.map((post, index) => (

					<div key={index}>

						<div>
							<Link href="/" className="hover:brightness-90 transition">

								<img src={post.thumbnail} alt={post.title} className="aspect-video object-cover" />
							</Link>
						</div>

						<div className="mt-2">
							<Link href="/" className="text-lg font-bold hover:underline">{post.title}</Link>
						</div>

						<div className="text-gray-500 flex gap-2">
							{post.tags.map((tag, index) => (

								<button key={index} className="hover:underline">{tag}</button>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default PostListSection