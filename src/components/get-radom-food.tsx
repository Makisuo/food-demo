"use client"

import { Button } from "@pixelshades/ui/components"
import { fetchNewRandomRecipe } from "~/action"

export const GetRandomFoodButton = () => {
	return (
		<form action={fetchNewRandomRecipe}>
			<Button type="submit">Get Random Food</Button>
		</form>
	)
}
