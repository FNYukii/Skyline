interface Props {
	className?: string
	
	label: string
	tags: string[]
}

function TagListSection(props: Props) {

	return (

		<div className={props.className}>

			<div className="bg-gray-100 p-4">

				<p>{props.label}</p>

				<div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">

					{props.tags.map((tag, index) => (

						<button key={index} className="text-gray-600 hover:underline overflow-hidden text-ellipsis whitespace-nowrap">{tag}</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default TagListSection