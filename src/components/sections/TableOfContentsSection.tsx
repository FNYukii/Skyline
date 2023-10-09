import ReactMarkdown from "react-markdown"

interface Props {
	content: string

	className?: string
}

function TableOfContentsSection(props: Props) {

	// id付き要素へ遷移するaタグ
	const anckerToId = ({ ...props }) => {
		return (
			<li>
				<a href={`#${props.children}`}>{props.children}</a>

			</li>
		)
	}

	return (

		<div className={props.className}>

			<div className="bg-gray-100 p-4">

				<p>目次</p>

				<ol className="list-decimal list-inside text-gray-600">

					<ReactMarkdown
						children={props.content}
						allowedElements={['h2']} // h2要素のみを表示する
						components={{ h2: anckerToId }} // h2要素をanckerToIdに置き換えて表示
						className="post-table-of-contents mt-2 flex flex-col gap-y-1"
					/>
				</ol>
			</div>
		</div>
	)
}

export default TableOfContentsSection