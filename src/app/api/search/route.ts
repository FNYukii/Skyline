import Post from "@/entities/Post"
import PostService from "@/utils/PostService"
import { NextRequest, NextResponse } from "next/server"

export function GET(req: NextRequest) {

	// APIにアクセスしてきたURIのクエリパラメータを取得
	const tag = req.nextUrl.searchParams.get("tag")
	const keyword = req.nextUrl.searchParams.get("keyword")

	// keywordとtag、どちらも無ければ、空を返す
	if (!tag && !keyword) {
		const res = NextResponse.json({ posts: [] })
		return res
	}

	// 検索ワードと検索タイプを決める
	const searchWord = tag ? tag : keyword!
	const searchType = tag ? "tag" : "keyword"

	// 検索
	let posts: Post[] = []

	if (searchType === "tag") {
		posts = PostService.postsByTag(searchWord)
	}

	if (searchType === "keyword") {
		posts = PostService.postsByKeyword(searchWord)
	}

	// postsをjson形式にして、レスポンスを返す
	const res = NextResponse.json({ posts: posts })
	return res
}