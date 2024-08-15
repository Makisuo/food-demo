"use server"

import { revalidatePath, revalidateTag } from "next/cache"

export const fetchNewRandomRecipe = async () => {
	console.log("Fetching new random recipe")
	revalidatePath("/")
}
