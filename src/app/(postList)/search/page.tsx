import SearchedPostListSection from '@/components/sections/SearchedPostListSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Search - Skyline'
}

export default function Page() {

	return (

		<SearchedPostListSection />
	)
}