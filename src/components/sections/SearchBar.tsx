"use client"

import { useState } from "react"
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai"
import { useRouter } from 'next/navigation'

interface Props {
	className?: string
}

function SearchBar(props: Props) {

	const [keyword, setKeyword] = useState("")

	const router = useRouter()

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {

		// フォームを送信しないように
		e.preventDefault()

		// keywordが空もしくは空白だけなら、検索しない
		if (keyword === "" || !keyword.match(/\S/g)) {
			return
		}

		// 検索画面へ遷移
		router.push(`/search?keyword=${keyword}`)
	}

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

				<form onSubmit={(e) => onSubmit(e)}>

					<input
						type="text"
						value={keyword}
						onChange={(event) => setKeyword(event.target.value)}
						onSubmit={(event) => alert("Hello")}
						placeholder="検索"
						className="pl-11 pr-4 py-2 w-full rounded-none outline-blue-500"
					/>
				</form>
				
			</div>
		</div>
	)
}

export default SearchBar