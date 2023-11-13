import Head from "next/head"
import Header from "../sections/Header"
import Footer from "../sections/Footer"

interface Props {
	title?: string
	children: JSX.Element | JSX.Element[]
}

function Page(props: Props) {

	return (
		<div className="bg-gray-100">

			<Header />

			<main className="lg:w-[1024px] px-4 lg:px-0 mx-auto">
				{props.children}
			</main>

			<Footer className="mt-24" />
		</div>
	)
}

export default Page