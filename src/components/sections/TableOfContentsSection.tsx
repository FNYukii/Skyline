import ReactMarkdown from "react-markdown"

interface Props {
	content: string

	className?: string
}

function TableOfContentsSection(props: Props) {

	// id付き要素へ遷移するaタグ
	const anckerToId = ({ ...props }) => {
		return (
			<a href={`#${props.children}`}>1. {props.children}</a>
		)
	}

	return (

		<div className={props.className}>

			<div className="bg-gray-100 p-4">

				<p>目次</p>

				<ReactMarkdown
					children={props.content}
					allowedElements={['h2']} // h2要素のみを表示する
					components={{ h2: anckerToId }} // h2要素をanckerToIdに置き換えて表示
					className="post-table-of-contents mt-2 flex flex-col gap-y-1"
				/>
			</div>
		</div>
	)
}

export default TableOfContentsSection