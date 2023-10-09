import Post from "@/entities/Post"

class TagService {

	static allTags(posts: Post[]): string[] {

		// 全Post内の全タグを取り出す
		let tags: string[] = []
		posts.forEach(post => {

			tags = tags.concat(post.tags)
		})

		// 重複を排除
		tags = Array.from(new Set(tags))

		// あいうえお順に並び変える
		tags.sort((a, b) => {
			return a.localeCompare(b, 'ja')
		})

		return tags
	}

	static recentlyTags(posts: Post[]): string[] {

		// 全Post内の全タグを取り出す
		let tags: string[] = []
		posts.forEach(post => {

			tags = tags.concat(post.tags)
		})

		// 重複を排除
		tags = Array.from(new Set(tags))

		// 要素数を制限
		tags.length = 5

		return tags
	}
}

export default TagService