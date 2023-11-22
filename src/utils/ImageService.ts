import GalleryItem from "@/entities/GalleryItem"
import PostService from "./PostService"

class ImageService {

	static galleryItems(): GalleryItem[] {

		const posts = PostService.allPosts()

		let galleryItems: GalleryItem[] = []

		posts.forEach(post => {

			if (post.thumbnail) {

				const galleryItem: GalleryItem = {
					image: post.thumbnail,
					postId: post.id
				}

				galleryItems.push(galleryItem)
			}

			// TODO: post.content内の画像も配列に追加
		})

		return galleryItems
	}
}

export default ImageService