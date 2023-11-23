import Photo from "@/entities/Photo"
import { useEffect } from "react"
import { MdOutlineClose } from "react-icons/md"

interface Props {
	photo: Photo
}

function PhotoModal(props: Props) {



	// Escキーでモーダルを閉じる関数
	const onKeyDown = (event: KeyboardEvent) => {

		// if (event.key === "Escape") props.onClose
	}

	// キーイベントと関数を設定
	useEffect(() => {
		document.body.style.overflow = "hidden"

		document.addEventListener("keydown", onKeyDown, false)

		return () => {
			document.removeEventListener("keydown", onKeyDown, false)
			document.body.style.overflow = "auto"
		}
		// eslint-disable-next-line
	}, [])



	return (
		
		<div className="z-10 fixed top-0 left-0   w-screen h-screen   flex justify-center items-center">

			<div className="w-full h-full bg-black/50"></div>

			<div className="absolute">
				<img src={props.photo.src} alt={props.photo.alt} className="max-h-[90vh] max-w-[90vw]" />
			</div>

			<button className="absolute top-0 left-0 m-3 p-3 rounded-full bg-black/10 hover:bg-white/20 transition">
				<MdOutlineClose className="text-2xl text-white" />
			</button>
		</div>
	)
}

export default PhotoModal