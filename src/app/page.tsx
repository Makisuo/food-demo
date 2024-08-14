import { Heading } from "@pixelshades/ui/components"
import { FoodCard } from "~/components/food-card"
import { getRandomRecipe } from "~/utils/api"

export default async function Home() {
	const meal = getRandomRecipe()

	return (
		<div className="mx-auto w-full space-y-layout-sm py-layout-sm">
			<Heading>Food Demo App</Heading>
			<p>Build here</p>
			<FoodCard mealPromise={meal} />
		</div>
	)
}

export const runtime = "edge"
