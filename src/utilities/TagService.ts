import Post from "@/entities/Post"

class TagService {

	static allTags(allPosts: Post[]): string[] {

		// 全Post内の全タグを取り出す
		let allTags: string[] = []
		allPosts.forEach(post => {

			allTags = allTags.concat(post.tags)
		})

		// 重複を排除
		allTags = Array.from(new Set(allTags))

		// あいうえお順に並び変える
		allTags.sort((a, b) => {
			return a.localeCompare(b, 'ja')
		})

		return allTags
	}
}

export default TagService