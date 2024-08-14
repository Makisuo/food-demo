import { Heading } from "@pixelshades/ui/components"
import { Suspense } from "react"
import { getRandomRecipe } from "~/utils/api"
import { FoodCard } from "./food-card"

export default async function Home() {
	const meal = getRandomRecipe()

	return (
		<div className="mx-auto w-full space-y-layout-sm py-layout-sm">
			<Heading>Food Demo App</Heading>
			<Suspense fallback={<div>Loading...</div>}>
				<FoodCard mealPromise={meal} />
			</Suspense>
		</div>
	)
}

export const runtime = "edge"
