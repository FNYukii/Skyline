import Photo from "@/entities/Photo"
import PostService from "./PostService"

class PhotoService {

	static photos(): Photo[] {

		const posts = PostService.allPosts()

		let photos: Photo[] = []

		posts.forEach(post => {

			if (post.thumbnail) {

				const photo: Photo = {
					image: post.thumbnail,
					postId: post.id
				}

				photos.push(photo)
			}

			// TODO: post.content内の画像も配列に追加
		})

		return photos
	}
}

export default PhotoService