"use client"

import { useSearchParams, notFound } from 'next/navigation'
import React from 'react'

interface Props {
	className?: string
}

function SearchedPostListSection(props: Props) {

	// クエリパラメータを取得
	const searchParams = useSearchParams()
	const keyword = searchParams.get("keyword")
	const tag = searchParams.get("tag")

	// keywordとtagどちらもセットされていないなら、404と扱う
	if (!keyword && !tag) {
		notFound()
	}

	// キーワードとタグのうちセットされた方を検索ワードとする
	const searchWord = keyword ? keyword : tag!

	// タグ検索するかどうか
	const searchType = keyword ? "keyword" : "tag"

	// searchWordが空なら404へ遷移
	if (searchWord === "") {
		notFound()
	}

	return (

		<div className={props.className}>

			<div>
				{searchType === "keyword" &&
					<h1 className='text-2xl font-bold'>「{searchWord}」の記事</h1>
				}

				{searchType === "tag" &&
					<h1 className='text-2xl font-bold'>「{searchWord}」タグの付いた記事</h1>
				}
			</div>

			<div className='mt-2'>
				<p className='text-gray-500'>Comming soon</p>
			</div>
		</div>
	)
}

export default SearchedPostListSection