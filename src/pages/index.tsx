import Page from "@/components/sections/Page";
import PostListSection from "@/components/sections/PostListSection";
import SearchSection from "@/components/sections/SearchSection";

export default function Home() {

	return (

		<Page>

			<main className="w-full lg:width-lg px-4 lg:px-0 mx-auto">

				<div className="mt-12 flex">

					<PostListSection className="w-2/3" />

					<SearchSection className="w-1/3 pl-8"/>
				</div>
			</main>
		</Page>
	)
}
