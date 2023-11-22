import PostService from "./PostService"

class ImageService {

	static allImagePaths(): string[] {

		const posts = PostService.allPosts()

		let umagePaths: string[] = []

		posts.forEach(post => {

			if (post.thumbnail) {

				umagePaths.push(post.thumbnail)
			}

			// TODO: post.content内の画像も配列に追加
		})

		return umagePaths
	}
}

export default ImageService