"use client"

import { useSearchParams, notFound } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import PostListSection from './PostListSection'
import Post from '@/entities/Post'

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



	// 表示するposts
	const [posts, setPosts] = useState<Post[] | null>(null)
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {

		(async () => {

			setIsLoaded(false)

			// APIを呼び出して検索
			const response = await fetch(`/api/search?${searchType}=${searchWord}`)

			// TODO: エラーハンドリング
			const json = await response.json()
			const posts = json.posts as Post[]

			// 結果をStateに格納
			setPosts(posts)
			setIsLoaded(true)
		})()

	}, [searchParams])



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

			<div className='mt-4'>
				{!isLoaded &&
					<p className='text-gray-500'>Loading...</p>
				}

				{isLoaded && posts !== null &&
					<PostListSection posts={posts} />
				}
			</div>

		</div>
	)
}

export default SearchedPostListSection