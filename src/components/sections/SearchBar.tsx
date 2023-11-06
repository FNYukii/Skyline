import { useState } from "react"
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai"

interface Props {
	className?: string
}

function SearchBar(props: Props) {

	const [keyword, setKeyword] = useState("")

	return (

		<div className={props.className}>

			<div className="relative">

				<div className="absolute pointer-events-none">

					<div className="mt-2 ml-4 flex items-center">

						<AiOutlineSearch className="text text-gray-500" />
						<p className="opacity-0">---</p>
					</div>
				</div>

				{keyword !== "" &&
					<div className="absolute w-full flex justify-end">

						<button onClick={() => setKeyword("")} className="mt-1 mr-2 p-2 rounded-full hover:bg-gray-100 transition">
							<AiOutlineClose className="text-gray-500" />
						</button>
					</div>
				}

				<input type="text" value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="検索" className="pl-11 pr-4 py-2 w-full rounded-none outline-blue-500" />
			</div>

		</div>
	)
}

export default SearchBar