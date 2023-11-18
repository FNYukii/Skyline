import PostService from "@/utils/PostService"
import { NextRequest, NextResponse } from "next/server"

export function GET(req: NextRequest) {

	const posts = PostService.allPosts()

	const res = NextResponse.json({ posts: posts  })
	return res
}