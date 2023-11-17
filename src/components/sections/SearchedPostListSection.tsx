"use client"

import { useSearchParams, notFound } from 'next/navigation'
import React from 'react'
import PostListSection from './PostListSection'

interface Props {
	className?: string
}

function SearchedPostListSection(props: Props) {

	// クエリパラメータを取得
	const searchParams = useSearchParams()
	const tag = searchParams.get("tag")
	const keyword = searchParams.get("keyword")

	// keywordとtagどちらもセットされていないなら、404と扱う
	if (!tag && !keyword) notFound()

	// キーワードとタグのうちセットされた方を検索ワードとする
	const searchWord = tag ? tag : keyword!

	// タグ検索するかどうか
	const searchType = tag ? "tag" : "keyword"

	// searchWordが空なら404へ遷移
	if (searchWord === "") notFound()

	return (

		<div className={props.className}>

			<div>
				{searchType === "tag" &&
					<h1 className='text-2xl font-bold'>「{searchWord}」タグの付いた記事</h1>
				}

				{searchType === "keyword" &&
					<h1 className='text-2xl font-bold'>「{searchWord}」の記事</h1>
				}
			</div>

			<PostListSection posts={[]} className='mt-2' />
		</div>
	)
}

export default SearchedPostListSection