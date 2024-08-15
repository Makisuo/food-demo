import { Card, CardContent, CardFooter, CardTitle, Link, LoadingSpinner } from "@pixelshades/ui/components"
import { Suspense } from "react"
import { type Meal, getCategories, getIngredients } from "~/utils/api"
import { FoodCardFooter } from "./food-card-footer"

export const FoodCard = async ({ mealPromise }: { mealPromise: Promise<Meal> }) => {
	const meal = await mealPromise

	const ingredients = getIngredients(meal)

	return (
		<Card className="w-full max-w-sm">
			<img
				src={meal.strMealThumb}
				alt="Delicious pasta dish"
				width="400"
				height="240"
				className="rounded-t-lg object-cover w-full"
				style={{ aspectRatio: "400/240", objectFit: "cover" }}
			/>
			<CardContent className="p-6 space-y-4">
				<div className="space-y-2">
					<CardTitle>{meal.strMeal}</CardTitle>
				</div>
				<div className="space-y-2">
					<h3 className="text-lg font-medium">Ingredients:</h3>
					<ul className="space-y-1 text-sm text-muted-foreground">
						{ingredients.map(({ name, measurement }, index) => (
							<li key={name}>
								{index + 1}. {name} {measurement && `(${measurement})`}
							</li>
						))}
					</ul>
				</div>
			</CardContent>
			<CardFooter>
				<Suspense fallback={<LoadingSpinner />}>
					<FoodCardFooter />
				</Suspense>
			</CardFooter>
		</Card>
	)
}
