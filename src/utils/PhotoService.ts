import Photo from "@/entities/Photo"
import PostService from "./PostService"

class PhotoService {

	static photos(): Photo[] {

		const posts = PostService.allPosts()

		let photos: Photo[] = []

		posts.forEach(post => {

			// thumnailがあれば配列photosについか
			if (post.thumbnail) {

				photos.push({
					src: post.thumbnail,
					postId: post.id
				})
			}

			// post.content内の画像も配列photosに追加
			const imgs: string[] = post.content.match(/img/g) ?? []			
		})

		return photos
	}
}

export default PhotoService