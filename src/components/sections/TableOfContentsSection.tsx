import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

interface Props {
	content: string

	className?: string
}

function TableOfContentsSection(props: Props) {

	// id付き要素へ遷移するaタグ
	function anckerToId({ ...props }) {
		return (
			<li className="overflow-hidden text-ellipsis whitespace-nowrap">
				<a href={`#${props.children}`}>{props.children}</a>
			</li>
		)
	}

	return (

		<div className={props.className}>

			<div className="bg-white p-4">

				<p className="font-bold">目次</p>

				<ol className="list-decimal list-inside text-gray-500">

					<ReactMarkdown
						children={props.content}
						rehypePlugins={[rehypeRaw]} // これが無いとhtmlタグがそのまま表示される
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