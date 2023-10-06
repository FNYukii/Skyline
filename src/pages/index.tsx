import Page from "@/components/sections/Page"
import PostListSection from "@/components/sections/PostListSection"
import SearchSection from "@/components/sections/SearchSection"
import AllTagListSection from "@/components/sections/AllTagListSection"
import HotTagListSection from "@/components/sections/HotTagListSection"

export default function Home() {

	return (

		<Page>

			<main className="w-full lg:width-lg px-4 lg:px-0 mx-auto">

				<div className="mt-12 flex">

					<div className="w-2/3">
						<PostListSection />
					</div>

					<div className="w-1/3 pl-8">

						<SearchSection />
						<HotTagListSection className="mt-4" />
						<AllTagListSection className="mt-4" />
					</div>
				</div>
			</main>
		</Page>
	)
}
