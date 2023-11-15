import { Dispatch, SetStateAction, useEffect } from "react"
import { MdOutlineClose } from "react-icons/md"

interface Props {
	image: {
		src: string
		alt: string
	} | null

	setImage: Dispatch<SetStateAction<{
		src: string;
		alt: string;
	} | null>>
}

function ImageModal(props: Props) {

	// 画像モーダル展開中はスクロール禁止
	useEffect(() => {

		if (props.image !== null) {
			document.body.style.overflow = "hidden"
		}

		if (props.image === null) {
			document.body.style.overflow = "auto"
		}
	}, [props.image])

	// Escキーでモーダルを閉じる関数
	const onKeyDown = (event: KeyboardEvent) => {

		if (event.key === "Escape") {
			props.setImage(null)
		}
	}

	// キーイベントと関数を設定
	useEffect(() => {

		document.addEventListener("keydown", onKeyDown, false)

		return () => {
			document.removeEventListener("keydown", onKeyDown, false)
			document.body.style.overflow = "auto"
		}
		// eslint-disable-next-line
	}, [])

	return (
		<div>

			{props.image !== null &&

				<div className="z-30 fixed top-0 left-0 w-full h-full flex justify-center items-center">

					<div onClick={() => props.setImage(null)} className="w-full h-full bg-black/50"></div>

					<div className="absolute">
						<img src={props.image.src} alt={props.image.alt} className="max-h-[90vh] max-w-[90vw]" />
					</div>

					<button onClick={() => props.setImage(null)} className="absolute top-0 left-0 m-3 p-3 rounded-full bg-black/10 hover:bg-white/20 transition">
						<MdOutlineClose className="text-2xl text-white" />
					</button>
				</div>
			}
		</div>
	)
}

export default ImageModal