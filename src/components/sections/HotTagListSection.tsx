interface Props {
	className?: string
}

function HotTagListSection(props: Props) {

	const tags = ["うめきた", "阪神電車", "近畿日本鉄道", "百貨店", "オフィスビル", "鉄筋鉄骨コンクリート造", "大阪市", "梅田", "住友不動産", "シティタワー"]

	return (

		<div className={props.className}>

			<div className="bg-gray-100 p-4">

				<p>人気のタグ</p>

				<div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">

					{tags.map((tag, index) => (

						<button key={index} className="text-gray-600 hover:underline">{tag}</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default HotTagListSection