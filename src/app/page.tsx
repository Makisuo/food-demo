import { Card, CardContent, CardDescription, CardHeader, CardTitle, Heading } from "@pixelshades/ui/components"
import { getIngredients, getRandomRecipe } from "~/utils/api"
import { ClientComp } from "./client-comp"

export default async function Home() {
	const meal = await getRandomRecipe()

	return (
		<div className="mx-auto w-full space-y-layout-sm py-layout-sm">
			<Heading>Food Demo App</Heading>
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
		</div>
	)
}
