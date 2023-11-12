import Post from '@/entities/Post'
import PostService from '@/utilities/PostService'
import type { NextApiRequest, NextApiResponse } from 'next'

import dayjs from "dayjs";
import fs from 'fs'

type ResponseData = {
	allPosts: Post[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {

	// postsフォルダ内のファイルのファイル名をすべて取得
	const fileNames = await fs.readdirSync('posts')

	// posts配列を生成
	let posts: Post[] = []
	fileNames.forEach(fileName => {

		// ベース名(ファイル名から拡張子を除去したもの)
		const baseName = fileName.replace(/\.md$/, '')

		// ベース名を元にPostを生成
		const post = PostService.postFromBaseName(baseName)
		posts.push(post)
	})

	// postsを新しい順に並べ替え
	posts.sort((a, b) => dayjs(b.createdAt).toDate().valueOf() - dayjs(a.createdAt).toDate().valueOf())

	// 返す
	res.status(200).json({ allPosts: posts })
}