interface Props {
	className?: string
	tags: string[]
}

function PostTagListSection(props: Props) {

	return (

		<div className={props.className}>

			<div className="bg-gray-100 p-4">

				<p>関連タグ</p>

				<div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">

					{props.tags.map((tag, index) => (

						<button key={index} className="text-gray-600 hover:underline">{tag}</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default PostTagListSection