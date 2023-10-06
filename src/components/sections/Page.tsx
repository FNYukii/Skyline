import Head from "next/head"
import Header from "./Header"

interface Props {
	title?: string
	children: JSX.Element | JSX.Element[]
}

function Page(props: Props) {

	return (
		<>
			<Head>
				<title>{props.title ? `${props.title} - Skyline` : "Skyline"}</title>
			</Head>

			<Header />

			{props.children}
		</>
	)
}

export default Page