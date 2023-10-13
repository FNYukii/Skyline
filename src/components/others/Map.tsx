import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import React from 'react'
import "leaflet/dist/leaflet.css"

function Map() {

	return (

		<MapContainer
			center={[34.7042545, 135.4921653]}
			zoom={13}
			scrollWheelZoom={false}
			style={{ height: "100%", width: "100%" }}
		>

			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			<Marker position={[51.505, -0.09]}>

				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	)
}

export default Map