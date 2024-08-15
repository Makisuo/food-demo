import { Heading, LoadingSpinner } from "@pixelshades/ui/components"
import { Suspense } from "react"
import { FoodCard } from "~/components/food-card"
import { FoodCategories } from "~/components/food-categories"
import { GetRandomFoodButton } from "~/components/get-radom-food"
import { getRandomRecipe } from "~/utils/api"

export default async function Home() {
	const meal = getRandomRecipe()

	return (
		<div className="mx-auto w-full space-y-layout-sm py-layout-sm">
			<Heading>Food Demo App</Heading>
			<div className="flex gap-md">
				<div>
					<Suspense
						fallback={
							<div>
								<LoadingSpinner />
							</div>
						}
					>
						<FoodCard mealPromise={meal} />
						<GetRandomFoodButton />
					</Suspense>
				</div>

				<Suspense
					fallback={
						<div>
							<LoadingSpinner />
						</div>
					}
				>
					<FoodCategories />
				</Suspense>
			</div>
		</div>
	)
}

export const runtime = "edge"
