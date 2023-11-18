import PostService from "@/utils/PostService"
import { NextRequest, NextResponse } from "next/server"

export function GET(req: NextRequest) {

	// APIにアクセスしてきたURIのクエリパラメータを取得
	const tag = req.nextUrl.searchParams.get("tag")

	// クエリパラメータが無ければ、エラーメッセージを返す
	if (!tag) {

		const res = NextResponse.json({message: "Error"})
		return res
	}

	// 検索
	const posts = PostService.postsByTag(tag)

	// postsをjson形式にして、レスポンスを返す
	const res = NextResponse.json({ posts: posts })
	return res
}