import PostListSection from '@/components/sections/PostListSection'
import SearchBar from '@/components/sections/SearchBar'
import SearchedPostListSection from '@/components/sections/SearchedPostListSection'
import TagListSection from '@/components/sections/TagListSection'
import TagService from '@/utils/TagService'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Search - Skyline'
}

export default function Page() {

	// タグ
	const allTags = TagService.allTags()
	const recentlyTags = TagService.recentlyTags()

	return (

		<div className="flex">

			<div className="w-full md:w-2/3 mt-12">

				<SearchedPostListSection />
			</div>

			<div className="hidden md:block md:w-1/3 mt-4 pl-8">

				<div className="pt-8 sticky top-0">
					<SearchBar />
					<TagListSection label="最近のタグ" className="mt-4" tags={recentlyTags} />
					<TagListSection label="全てのタグ" className="mt-4" tags={allTags} />
				</div>
			</div>
		</div>
	)
}