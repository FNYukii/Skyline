import Post from '@/entities/Post'
import PostService from '@/utilities/PostService'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
	allPosts: Post[]
}

export default async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {

	const posts = await PostService.allPosts()

	res.status(200).json({ allPosts: posts })
}