import Post from "@/entities/Post"
import dayjs from "dayjs"
import { AiOutlineEdit } from "react-icons/ai"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useState } from "react"
import rehypeRaw from "rehype-raw"
import Link from "next/link"
import ImageModal from "../others/ImageModal"

interface Props {
	className?: string
	post: Post
}

function PostSection(props: Props) {

	// モーダル展開する画像
	const [openImage, setOpenImage] = useState<{ src: string, alt: string } | null>(null)

	// ID付きのh2タグ
	function h2WithId({ ...props }) {
		return (
			<h2 id={props.children}>{props.children}</h2>
		)
	}

	// モーダルを開くbuttonタグに入ったimgタグ
	function ImgExpandable({ ...props }) {
		return (
			<button onClick={() => setOpenImage({ src: props.src, alt: props.alt })} className="mt-2 hover:brightness-90 transition w-fit">
				<img src={props.src} alt={props.alt} className="h-full object-cover" />
			</button>
		)
	}

	return (

		<div className={props.className}>

			<div className="flex justify-between">

				<h1 className="text-2xl font-bold">{props.post.title}</h1>

				<div className="flex gap-2 items-center">

					<AiOutlineEdit className="text-gray-500 text-lg" />

					<span className="text-gray-500">
						{dayjs(props.post.createdAt).format("YYYY年M月D日")}
					</span>
				</div>
			</div>

			<button onClick={() => setOpenImage({ src: props.post.thumbnail, alt: props.post.title })} className="mt-4 hover:brightness-90 transition">
				<img src={props.post.thumbnail} alt={props.post.title} className="aspect-video object-cover" />
			</button>

			<ReactMarkdown
				children={props.post.content}
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw]}
				components={{ h2: h2WithId, img: ImgExpandable }} // 特定のタグを自作の要素に置き換えて表示
				className="post-content"
			/>

			<ImageModal image={openImage} setImage={setOpenImage} />
		</div>
	)
}

export default PostSection