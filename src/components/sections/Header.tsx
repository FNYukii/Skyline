import Link from "next/link"

interface Props {
	className?: string
}

function Header(props: Props) {

	return (

		<header className={props.className}>

			<div className="bg-accent-color text-white">

				<div className="py-2 flex justify-between items-center w-full lg:w-[1024px] px-4 lg:px-0 mx-auto">

					<Link href="/" className="text-4xl font-light">Skyline</Link>

					<div className="flex gap-8">

						<Link href="/" className="hover:underline">Top</Link>
						<Link href="/gallery" className="hover:underline">Gallery</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header