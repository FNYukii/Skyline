import Post from "@/entities/Post"
import dayjs from "dayjs"
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

class PostService {

	static postById(postId: string): Post {

		// postのidをもとに、mdファイル名を求める
		const baseName = postId
		const fileName = `${baseName}.md`

		// mdファイルへの絶対パスを取得
		const postsDirectory = path.join(process.cwd(), 'posts')
		const fullPath = path.join(postsDirectory, fileName)

		// ファイル内のテキスト
		const textInFile = fs.readFileSync(fullPath, 'utf-8')

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
			id: postId,
			title: title,
			tags: tags,
			createdAt: createdAt,
			thumbnail: thumbnail,
			location: location,
			content: content
		}

		return post
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
			const post = this.postById(baseName)
			posts.push(post)
		})

		// postsを新しい順に並べ替え
		posts.sort((a, b) => dayjs(b.createdAt).toDate().valueOf() - dayjs(a.createdAt).toDate().valueOf())

		return posts
	}

	

	static recently10Posts(): Post[] {

		const posts = this.allPosts()

		// 要素数を制限
		if (posts.length > 10) {
			posts.length = 10
		}

		return posts
	}



	static relatedPosts(targetPostId: string): Post[] {

		const targetPost = this.postById(targetPostId)

		const targetTags = targetPost.tags
		const allPosts = this.allPosts()

		// postsにフィルターをかけ、タグが一件でも一致するpostのみを取り出す
		let relatedPosts: Post[] = []

		allPosts.forEach(post => {

			// postとtargetPostで一致するタグを抽出
			const matchTags = post.tags.filter(tag => targetTags.includes(tag))

			// 一致タグ数が基準値以上なら、関連記事とする
			if (matchTags.length >= 2) {
				relatedPosts.push(post)
			}
		})

		// 引数として渡されたpostを除外
		relatedPosts = relatedPosts.filter(post => post.id !== targetPost.id)

		// 要素数を制限
		if (relatedPosts.length > 5) {
			relatedPosts.length = 5
		}

		return relatedPosts
	}



	static postsByTag(tag: string): Post[] {

		const allPosts = this.allPosts()

		// 指定されたタグの付いたpostのみ抽出
		const searchedPosts = allPosts.filter(post => post.tags.includes(tag))

		return searchedPosts
	}



	static postsByKeyword(keyword: string): Post[] {

		const allPosts = this.allPosts()

		// タイトル中にkeywordを含むpostsを抽出
		const postsMatchTitle = allPosts.filter(post => post.title.includes(keyword))

		// いずれかのタグ中にkeywordを含むpostsを抽出
		const postsMatchTag = allPosts.filter(post => post.tags.some(tag => tag.includes(keyword)))

		// 2パターンで抽出したpostsを一つの配列にまとめる
		let searchedPosts: Post[] = []
		searchedPosts = searchedPosts.concat(postsMatchTitle)
		searchedPosts = searchedPosts.concat(postsMatchTag)

		// 重複した要素を除外
		const uniqueSearchedPosts = searchedPosts.filter((post, index, posts) => posts.findIndex((e) => e.id === post.id) === index)

		return uniqueSearchedPosts
	}
}

export default PostService