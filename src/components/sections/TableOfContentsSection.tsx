interface Props {
	className?: string
}

function TableOfContentsSection(props: Props) {

	const contents = [
		"概要",
		"最新鋭のオフィス",
		"外資系ホテルが入居予定",
		"計画詳細"
	]

	return (

		<div className={props.className}>

			<div className="bg-gray-100 p-4">

				<p>目次</p>

				<div className="mt-2 flex flex-col items-start gap-x-2 gap-y-1">

					{contents.map((content, index) => (

						<button key={index} className="text-gray-600 hover:underline">{`${index + 1}. ${content}`}</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default TableOfContentsSection