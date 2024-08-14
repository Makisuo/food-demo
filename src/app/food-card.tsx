import { Card, CardContent, CardDescription, CardTitle } from "@pixelshades/ui/components"
import { type Meal, getIngredients } from "~/utils/api"

export const FoodCard = async ({ mealPromise }: { mealPromise: Promise<Meal> }) => {
	const meal = await mealPromise
	return (
		<Card className="w-full max-w-md">
			<img
				src={meal.strMealThumb}
				alt={meal.strMeal}
				className="h-72 w-full rounded-t-lg object-cover"
				width="500"
				height="300"
				style={{ aspectRatio: "500/300", objectFit: "cover" }}
			/>
			<CardContent className="grid gap-lg p-layout-sm pt-layout-sm">
				<div className="grid gap-md">
					<CardTitle className="font-bold text-2xl">{meal.strMeal}</CardTitle>
					<CardDescription className="text-subtle-foreground">
						A delicious and easy-to-make pasta dish with juicy shrimp in a creamy garlic sauce.
					</CardDescription>
				</div>
				<div className="grid gap-md">
					<h3 className="font-semibold text-lg">Ingredients:</h3>
					<ul className="grid gap-md text-muted-foreground">
						{getIngredients(meal).map((ingredient, index) => (
							<li key={index}>
								{ingredient.name} &middot; {ingredient.measurement}
							</li>
						))}
					</ul>
				</div>
			</CardContent>
		</Card>
	)
}
