import Link from "next/link"

function Header() {

	return (

		<header className="bg-accent-color text-white">

			<div className="py-2 flex justify-between items-center w-full lg:width-lg px-4 lg:px-0 mx-auto">

				<Link href="/" className="text-4xl ">Skyline</Link>

				<div className="flex gap-8">

					<Link href="/" className="hover:underline">Top</Link>
					<Link href="/map" className="hover:underline">Map</Link>
					<Link href="/gallery" className="hover:underline">Gallery</Link>
				</div>
			</div>
		</header>
	)
}

export default Header