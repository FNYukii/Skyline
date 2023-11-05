interface Props {
	className?: string

	label: string
	tags: string[]
}

function TagListSection(props: Props) {

	return (

		<div className={props.className}>

			<div className="bg-white p-4">

				<p className="font-bold">{props.label}</p>

				<div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">

					{props.tags.map((tag, index) => (

						<button key={index} className="text-gray-500 hover:underline overflow-hidden text-ellipsis whitespace-nowrap">{tag}</button>
					))}

					{props.tags.length === 0 &&
						<p className="text-gray-500">タグはありません</p>
					}
				</div>
			</div>
		</div>
	)
}

export default TagListSection