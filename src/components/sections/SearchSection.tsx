import { useState } from "react"
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai"

interface Props {
	className?: string
}

function SearchSection(props: Props) {

	const [keyword, setKeyword] = useState("")

	return (

		<div className={props.className}>

			<div className="relative">

				{keyword === "" &&
					<div className="absolute pointer-events-non">

						<div className="mt-2 ml-4 flex items-center gap-2">

							<AiOutlineSearch className="text-gray-500" />
							<span className="text-gray-500">検索</span>
						</div>
					</div>
				}

				{keyword !== "" &&
					<div className="absolute w-full flex justify-end">

						<button onClick={() => setKeyword("")} className="mt-1 mr-2 p-2 rounded-full hover:bg-gray-100 transition">
							<AiOutlineClose className="text-gray-500" />
						</button>
					</div>
				}

				<input type="text" value={keyword} onChange={(event) => setKeyword(event.target.value)} className="px-4 py-2 w-full rounded-none outline-blue-500" />
			</div>

		</div>
	)
}

export default SearchSection