import Photo from "@/entities/Photo"
import PostService from "./PostService"
import { randomUUID } from "crypto"

class PhotoService {

	static allPhotos(): Photo[] {

		const posts = PostService.allPosts()

		// photo要素をまとめる配列photos
		let photos: Photo[] = []

		posts.forEach(post => {

			// thumnailがあればphoto要素を追加
			if (post.thumbnail) {

				photos.push({
					src: post.thumbnail,
					alt: post.title,
					postId: post.id
				})
			}

			// 本文内の画像も配列photosの要素として追加
			// 本文文字列内からimgタグのみ抽出
			const imgs: string[] = post.content.match(/<img.*\/>/g) ?? []

			imgs.forEach(img => {

				// imgタグの文字列からsrc="/images/xxxxx.xxx"の部分だけ抽出
				const srcEqualValue: string | null = img.match(/src="\/images\/.*\.[a-z]*"/)?.at(0) ?? null
				if (!srcEqualValue) return

				// src="/images/xxxxx.xxx"からsrc属性の値のみ抽出
				const src: string | null = srcEqualValue.match(/\/images\/.*\.[a-z]*/)?.at(0) ?? null
				if (!src) return

				// imgタグの文字列からalt="xxxxxxxxxxx"の値のみ抽出
				const altEqualValue: string | null = img.match(/alt=".*"/)?.at(0) ?? null
				if (!altEqualValue) return

				// alt="xxxxxxxx"からalt属性の値のみ抽出
				const alt: string | null = altEqualValue.match(/".*"/)?.at(0)?.replace(/"/g, "") ?? null
				if (!alt) return

				// 新しいphoto要素を追加
				photos.push({
					src: src,
					alt: alt,
					postId: post.id
				})
			})
		})

		// 重複した要素を除外
		const uniquePhotos = photos.filter((photo, index, photos) => photos.findIndex((e) => e.src === photo.src) === index)

		return uniquePhotos
	}
}

export default PhotoService