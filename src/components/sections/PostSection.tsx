'use client'

import Post from "@/entities/Post"
import dayjs from "dayjs"
import { AiOutlineEdit } from "react-icons/ai"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useState } from "react"
import rehypeRaw from "rehype-raw"
import ImageModal from "../others/ImageModal"
import Image from "next/image"
import { MdOutlineImageNotSupported } from "react-icons/md"

interface Props {
	className?: string
	post: Post
}

function PostSection(props: Props) {

	// モーダル展開する画像
	const [openImage, setOpenImage] = useState<{ src: string, alt: string } | null>(null)

	// ID付きのh2タグ
	function h2WithId({ ...props }) {

		const id: string = props.children

		return (
			<h2 id={id}>{props.children}</h2>
		)
	}

	// モーダルを開くbuttonタグに入ったimgタグ
	function ImgExpandable({ ...props }) {
		return (
			<button onClick={() => setOpenImage({ src: props.src, alt: props.alt })} className="mt-2 hover:brightness-90 transition ">

				<div className="relative aspect-video bg-gray-200">
					<Image src={props.src} alt={props.alt} fill className="object-cover" />
				</div>
			</button>
		)
	}

	return (
		<div className={props.className}>

			<div>

				<div className="flex">

					{props.post.thumbnail !== null &&
						<button onClick={() => setOpenImage({ src: props.post.thumbnail!, alt: props.post.title })} className="hover:brightness-90 transition w-full">

							<div className="relative aspect-video w-full bg-gray-200">
								<Image src={props.post.thumbnail} alt={props.post.title} fill className="object-cover" />
							</div>
						</button>
					}

					{props.post.thumbnail === null &&
						<div className="aspect-video w-full flex justify-center items-center bg-gray-200">
							<MdOutlineImageNotSupported className="text-4xl text-gray-400" />
						</div>
					}
				</div>

				<div className="pt-6 pb-12 px-4 sm:px-8 bg-white">

					<div className="flex justify-between gap-x-4 flex-wrap gap-y-1">

						<h1 className="text-2xl font-bold">{props.post.title}</h1>

						<div className="flex gap-2 items-center">
							<AiOutlineEdit className="text-gray-500 text-lg" />
							<span className="text-gray-500">
								{dayjs(props.post.createdAt).format("YYYY年M月D日")}
							</span>
						</div>
					</div>

					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeRaw]}
						components={{ h2: h2WithId, img: ImgExpandable }} // 特定のタグを自作の要素に置き換えて表示
						className="post-content"
					>
						{props.post.content}
					</ReactMarkdown>

					<ImageModal image={openImage} setImage={setOpenImage} />

					{props.post.location !== null &&
						<div className="mt-12">
							<h2 className="font-bold text-xl">マップ</h2>
							<iframe
								src={`https://maps.google.co.jp/maps?output=embed&q=${props.post.location.at(0)}, ${props.post.location.at(1)}`}
								height="450"
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title='GoogleMap'
								className='mt-2 border border-gray-100 w-full aspect-video bg-gray-100'
							/>
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default PostSection