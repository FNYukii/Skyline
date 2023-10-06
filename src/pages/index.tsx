import Page from "@/components/sections/Page";
import PostListSection from "@/components/sections/PostListSection";

export default function Home() {

	return (

		<Page>

			<main className="w-full lg:width-lg px-4 lg:px-0 mx-auto">

				<PostListSection className="mt-12 w-2/3"/>
			</main>
		</Page>
	)
}
