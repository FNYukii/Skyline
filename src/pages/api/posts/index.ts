import Post from '@/entities/Post'
import PostService from '@/utilities/PostService'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
	allPosts: Post[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {

	return new Promise(async () => {

		const posts = await PostService.allPosts()
		return res.status(200).json({ allPosts: posts })
	})
}