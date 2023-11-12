import Post from "@/entities/Post";
import dayjs from "dayjs";
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

	static recently10Posts(): Post[] {

		// postsフォルダ内のファイルのファイル名をすべて取得
		const fileNames = fs.readdirSync('posts')

		// posts配列を生成
		let posts: Post[] = []
		fileNames.forEach(fileName => {

			// ベース名(ファイル名から拡張子を除去したもの)
			const baseName = fileName.replace(/\.md$/, '')

			// ベース名を元にPostを生成
			const post = this.postFromBaseName(baseName)
			posts.push(post)
		})

		// postsを新しい順に並べ替え
		posts.sort((a, b) => dayjs(b.createdAt).toDate().valueOf() - dayjs(a.createdAt).toDate().valueOf())

		// 最新の10件だけ残す
		posts.length = 10

		return posts
	}

	static allPosts(): Post[] {

		// postsフォルダ内のファイルのファイル名をすべて取得
		const fileNames = fs.readdirSync('posts')

		// posts配列を生成
		let posts: Post[] = []
		fileNames.forEach(fileName => {

			// ベース名(ファイル名から拡張子を除去したもの)
			const baseName = fileName.replace(/\.md$/, '')

			// ベース名を元にPostを生成
			const post = this.postFromBaseName(baseName)
			posts.push(post)
		})

		// postsを新しい順に並べ替え
		posts.sort((a, b) => dayjs(b.createdAt).toDate().valueOf() - dayjs(a.createdAt).toDate().valueOf())
		
		return posts
	}
}

export default PostService