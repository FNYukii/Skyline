import Post from "@/entities/Post";
import fs from 'fs'
import matter from 'gray-matter'

class PostService {

	static postFromBaseName(baseName: string): Post {

		// ファイル内のテキスト
		const textInFile = fs.readFileSync(`posts/${baseName}.md`, 'utf-8')

		// ファイル内のテキストをdataとContentに分離
		const { data, content } = matter(textInFile)

		// dataオフジェクトからtitle, tags, date, thumbnailプロパティの値を取り出す
		const title: string = data.title
		const tags: string[] = data.tags ?? []
		const createdAt: string = data.createdAt
		const thumbnail: string | null = data.thumbnail ?? null
		const location: number[] | null = data.location ?? null

		// ファイルのベース名をidとして、postオブジェクトを生成
		const post: Post = {
			id: baseName,
			title: title,
			tags: tags,
			createdAt: createdAt,
			thumbnail: thumbnail,
			location: location,
			content: content
		}

		return post
	}
}

export default PostService