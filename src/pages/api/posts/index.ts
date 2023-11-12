import Post from '@/entities/Post'
import PostService from '@/utilities/PostService'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
	allPosts: Post[]
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {

	const postsPromise = PostService.allPosts()

	return postsPromise.then((posts) => {

		res.status(200).json({ allPosts: posts })
	})
}