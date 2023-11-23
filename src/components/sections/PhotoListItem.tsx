import Photo from "@/entities/Photo"
import Image from "next/image"
import { useState } from "react"
import PhotoModal from "../others/PhotoModal"

interface Props {
	photo: Photo
}

function PhotoListItem(props: Props) {

	const [isOpenModal, setIsOpenModal] = useState(false)

	return (
		<div>

			<div onClick={() => setIsOpenModal(true)} className="relative aspect-video bg-gray-200   hover:brightness-90 transition">
				<Image src={props.photo.src} alt={props.photo.alt} className="object-cover" fill priority />
			</div>

			{isOpenModal &&
				<PhotoModal photo={props.photo} />
			}
		</div>
	)
}

export default PhotoListItem