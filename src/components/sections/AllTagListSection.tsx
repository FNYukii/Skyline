interface Props {
	className?: string
}

function AllTagListSection(props: Props) {

	const tags = ["大阪市", "梅田", "住友不動産", "シティタワー", "ガーデン", "UR都市機構", "阪急阪神不動産", "ジオ", "ジオグランデ", "ジオタワー", "京都", "JR西日本", "ホテルグランヴィア", "JR西日本ホテルズ", "ブリリア", "東京建物", "森ビル", "東京", "新宿", "渋谷", "六本木", "虎ノ門", "赤坂", "病院", "ホテル", "外資系ホテル", "ヒルトン", "ウォルドーフ・アストリア", "コンラッド", "ダブルツリーbyヒルトン", "谷町", "天満橋", "大阪市北区", "大阪市中央区", "東京都港区", "大阪市淀川区", "阪急電鉄", "うめきた", "阪神電車", "近畿日本鉄道", "百貨店", "オフィスビル", "鉄筋鉄骨コンクリート造"]

	return (

		<div className={props.className}>

			<div className="bg-gray-100 p-4">

				<p>全てのタグ</p>

				<div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">

					{tags.map((tag, index) => (

						<button className="text-gray-600 hover:underline">{tag}</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default AllTagListSection