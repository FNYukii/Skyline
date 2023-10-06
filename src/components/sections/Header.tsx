import Link from "next/link"

function Header() {

	return (

		<header className="bg-blue-950 text-white">

			<div className="py-2 flex justify-between items-center w-full lg:width-lg px-4 lg:px-0 mx-auto">

				<Link href="/" className="text-3xl">Skyline</Link>

				<div className="flex gap-4">

					<Link href="/" className="hover:underline">Top</Link>
					<Link href="/map" className="hover:underline">Map</Link>
					<Link href="/gallery" className="hover:underline">Gallery</Link>
				</div>
			</div>
		</header>
	)
}

export default Header