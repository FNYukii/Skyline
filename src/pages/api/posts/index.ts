import Post from '@/entities/Post'
import PostService from '@/utilities/PostService'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
	allPosts: Post[]
}

export default function handler (
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {

	const posts = PostService.test()
	
	res.status(200).json({ allPosts: posts })
}