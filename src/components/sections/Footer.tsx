import Link from "next/link"

interface Props {
	className?: string
}

function Footer(props: Props) {

	return (

		<footer className={props.className}>

			<div className="bg-accent-color text-white pt-8 pb-4">

				<div className="w-full lg:w-[1024px] px-4 lg:px-0 mx-auto">

					<div className="flex justify-between flex-wrap gap-y-8">

						<div className="w-full sm:w-fit">
							<Link href="/" className="text-4xl font-light">Skyline</Link>
							<p className="mt-1 text-gray-400">好きなビルを語るブログ</p>
						</div>

						<div className="flex gap-8 sm:gap-16">

							<div>
								<p className="font-bold text-xl">Pages</p>
								<div className="mt-2 flex flex-col">
									<Link href="/" className="text-gray-400 hover:underline">Top</Link>
									<Link href="/map" className="text-gray-400 hover:underline">Map</Link>
									<Link href="/gallery" className="text-gray-400 hover:underline">Gallery</Link>
								</div>
							</div>

							<div>
								<p className="font-bold text-xl">Links</p>
								<div className="mt-2 flex flex-col">
									<a target="blank" href="https://github.com/FNYukii/Skyline" className="text-gray-400 hover:underline">Source</a>
								</div>
							</div>

						</div>
					</div>

					<p className="mt-16 text-gray-400 text-center">© 2023 FNYukii.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer