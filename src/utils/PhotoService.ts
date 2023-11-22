import Photo from "@/entities/Photo"
import PostService from "./PostService"

class PhotoService {

	static allPhotos(): Photo[] {

		const posts = PostService.allPosts()

		let photos: Photo[] = []

		posts.forEach(post => {

			// thumnailがあれば配列photosに追加
			if (post.thumbnail) {

				photos.push({
					src: post.thumbnail,
					alt: post.title,
					postId: post.id
				})
			}

			// 本文内の画像も配列photosに追加
			// 本文文字列内からimgタグのみ抽出
			const imgs: string[] = post.content.match(/<img.*\/>/g) ?? []


			imgs.forEach(img => {

				// imgタグの文字列からsrc属性の値のみ抽出
				const src: string | null = img.match(/\/images\/.*\.[a-z]*/g)?.at(0) ?? null
				if (!src) return

				// imgタグの文字列からalt属性の値のみ抽出
				const alt: string | null = "Hello"
				if (!alt) return

				photos.push({
					src: src,
					alt: alt,
					postId: post.id
				})

			})



		})

		return photos
	}
}

export default PhotoService