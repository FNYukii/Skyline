"use client"

import { useRouter } from 'next/navigation'

function BackButton() {

	const router = useRouter()

	return (
		<button onClick={() => router.back()} className="py-2 px-16 border border-gray-300 hover:bg-gray-200 transition">戻る</button>
	)
}

export default BackButton