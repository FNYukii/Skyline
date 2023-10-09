import { useEffect, useState } from "react"

interface Props {
	className?: string

	src: string
	alt: string
}

function ImageModalButton(props: Props) {

	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {

		if (isOpen) {
			document.body.style.overflow = "hidden"
		}

		if (!isOpen) {
			document.body.style.overflow = "auto"
		}
	}, [isOpen])

	return (

		<>
			<div className={props.className}>

				<button onClick={() => setIsOpen(true)} className="hover:brightness-90 transition">
					<img src={props.src} alt={props.alt} className="aspect-video object-cover" />
				</button>
			</div>

			{isOpen &&
				<div className="z-30 fixed top-0 left-0 w-full h-full flex justify-center items-center">

					<div onClick={() => setIsOpen(false)} className="w-full h-full bg-black/50"></div>

					<img src={props.src} alt={props.alt} className="absolute max-height-screen-95" />
				</div>
			}
		</>
	)
}

export default ImageModalButton