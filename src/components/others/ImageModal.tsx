import { Dispatch, SetStateAction, useEffect } from "react"

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
		document.body.style.overflowY = "hidden"

		return () => {
			document.removeEventListener("keydown", onKeyDown, false)
			document.body.style.overflowY = ""
		}
		// eslint-disable-next-line
	}, [])

	return (
		<div>

			{props.image !== null &&

				<div className="z-30 fixed top-0 left-0 w-full h-full flex justify-center items-center">

					<div onClick={() => props.setImage(null)} className="w-full h-full bg-black/50"></div>

					<img src={props.image.src} alt={props.image.alt} className="absolute max-height-screen-95" />
				</div>
			}
		</div>
	)
}

export default ImageModal