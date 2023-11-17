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

	// keywordとtag、どちらもnullもしくは""なら、404ページを表示
	if (!tag && !keyword) notFound()

	// 検索ワードと検索タイプを決める
	const searchWord = tag ? tag : keyword!
	const searchType = tag ? "tag" : "keyword"

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