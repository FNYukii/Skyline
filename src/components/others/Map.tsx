import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

// マーカー表示を修正
import L, { LatLngTuple } from "leaflet"
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
	iconUrl: markerIcon.src,
	iconRetinaUrl: markerIcon2x.src,
	shadowUrl: markerShadow.src,
})

interface Props {
	location: number[]
	className?: string
}

function Map(props: Props) {

	const location: LatLngTuple = [props.location.at(0)!, props.location.at(1)!]

	return (

		<MapContainer
			center={location}
			zoom={16}
			scrollWheelZoom={false}
			style={{ height: "100%", width: "100%" }}
			className={props.className}
		>

			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			<Marker position={location} />
		</MapContainer>
	)
}

export default Map