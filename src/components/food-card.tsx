import { Card } from "@pixelshades/ui/components"
import type { Meal } from "~/utils/api"

export const FoodCard = async ({ mealPromise }: { mealPromise: Promise<Meal> }) => {
	return <Card className="w-full max-w-md">Food Card</Card>
}
