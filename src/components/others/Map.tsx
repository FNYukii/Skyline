import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

// マーカー表示を修正
import L, { LatLngTuple } from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

function Map() {

	const location: LatLngTuple = [34.70424657762377, 135.49483755939468]

	return (

		<MapContainer
			center={location}
			zoom={16}
			scrollWheelZoom={false}
			style={{ height: "100%", width: "100%" }}
		>

			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			<Marker position={location}>

				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	)
}

export default Map