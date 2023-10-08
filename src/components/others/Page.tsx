import Head from "next/head"
import Header from "../sections/Header"
import Footer from "../sections/Footer"

interface Props {
	title?: string
	children: JSX.Element | JSX.Element[]
}

function Page(props: Props) {

	return (
		<>
			<Head>
				<title>{props.title ?? "Skyline"}</title>
			</Head>

			<Header />

			{props.children}

			<Footer className="mt-16" />
		</>
	)
}

export default Page