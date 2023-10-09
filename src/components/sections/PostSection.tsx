import Post from "@/entities/Post"
import dayjs from "dayjs"
import { AiOutlineEdit } from "react-icons/ai"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useEffect, useState } from "react"

interface Props {
	className?: string
	post: Post
}

function PostSection(props: Props) {

	// ID付きのh2タグ
	function h2WithId({ ...props }) {
		return (
			<h2 id={props.children}>{props.children}</h2>
		)
	}

	// モーダルを開くbuttonタグに入ったimgタグ
	function ImgExpandable({ ...props }) {
		return (
			<button onClick={() => setOpenImage(props.src)} className="mt-4 hover:brightness-90 transition">
				<img src={props.src} alt={props.alt} />
			</button>
		)
	}

	// 画像モーダル用フラグ
	const [openImage, setOpenImage] = useState("")

	// 画像モーダル展開中はスクロール禁止
	useEffect(() => {

		if (openImage !== "") {
			document.body.style.overflow = "hidden"
		}

		if (openImage === "") {
			document.body.style.overflow = "auto"
		}
	}, [openImage])

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

			<button onClick={() => setOpenImage(props.post.thumbnail)} className="mt-4 hover:brightness-90 transition">
				<img src={props.post.thumbnail} alt={props.post.title} className="aspect-video object-cover" />
			</button>

			<ReactMarkdown
				children={props.post.content}
				remarkPlugins={[remarkGfm]}
				components={{ h2: h2WithId, img: ImgExpandable }} // 特定のタグを自作の要素に置き換えて表示
				className="post-content"
			/>

			{openImage !== "" &&
				<div className="z-30 fixed top-0 left-0 w-full h-full flex justify-center items-center">

					<div onClick={() => setOpenImage("")} className="w-full h-full bg-black/50"></div>

					<img src={openImage} alt={"---"} className="absolute max-height-screen-95" />
				</div>
			}
		</div>
	)
}

export default PostSection