interface Props {
	className?: string
}

function SearchSection(props: Props) {

	return (
		<div className={props.className}>

			<input type="text" placeholder="検索" className="px-4 py-2 w-full bg-gray-100 placeholder:text-gray-400 rounded-none outline-blue-500" />
		</div>
	)
}

export default SearchSection