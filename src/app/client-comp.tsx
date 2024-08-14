"use client"

import { use } from "react"
import type { getRandomRecipe } from "~/utils/api"

export const ClientComp = ({ data }: { data: ReturnType<typeof getRandomRecipe> }) => {
	const meal = use(data)

	console.log(meal)
	return <div>Client</div>
}
