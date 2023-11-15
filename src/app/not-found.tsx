import Link from "next/link"

function NotFoundPage() {

	return (

		<div className="mt-16 text-center">

			<h1 className="text-3xl font-bold">Page not found</h1>
			<p className="mt-2 text-gray-500">指定されたページは見つかりませんでした</p>

			<Link href="/" className="mt-8 block mx-auto w-fit   py-2 px-16 border border-gray-300 hover:bg-gray-200 transition">トップへ戻る</Link>
		</div>
	)
}

export default NotFoundPage