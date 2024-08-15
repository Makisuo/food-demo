import { cache } from "react"

import { deepStrictEqual } from "assert"
import { unstable_cache } from "next/cache"

const API_URL = "https://www.themealdb.com/api/json/v1/1"

const ARTIFICIAL_DELAY = 3000

export const getRecipeById = async (id: string) => {
	await artificalDelay(ARTIFICIAL_DELAY)

	const response = await fetch(`${API_URL}/lookup.php?i=${id}`, {})
	const data = (await response.json()) as { meals: Meal[] }

	const meal = data.meals[0]

	if (!meal) return null

	return meal
}

export const getRandomRecipe = async () => {
	await artificalDelay(ARTIFICIAL_DELAY)

	const response = await fetch(`${API_URL}/random.php`, {
		next: {
			tags: ["random-recipe"],
		},
	})
	const data = (await response.json()) as { meals: Meal[] }

	const meal = data.meals[0]

	if (!meal) {
		throw new Error("No meal found")
	}

	return meal
}

export const getCategories = async () => {
	await artificalDelay(ARTIFICIAL_DELAY + 3000)

	const response = await fetch(`${API_URL}/categories.php`)

	const data = (await response.json()) as { categories: Category[] }

	return data.categories
}

export interface Meal {
	idMeal: string
	strMeal: string
	strDrinkAlternate: any
	strCategory: string
	strArea: string
	strInstructions: string
	strMealThumb: string
	strTags: string
	strYoutube: string
	strIngredient1: string
	strIngredient2: string
	strIngredient3: string
	strIngredient4: string
	strIngredient5: string
	strIngredient6: string
	strIngredient7: string
	strIngredient8: string
	strIngredient9: string
	strIngredient10: string
	strIngredient11: string
	strIngredient12: string
	strIngredient13: string
	strIngredient14: string
	strIngredient15: string
	strIngredient16: any
	strIngredient17: any
	strIngredient18: any
	strIngredient19: any
	strIngredient20: any
	strMeasure1: string
	strMeasure2: string
	strMeasure3: string
	strMeasure4: string
	strMeasure5: string
	strMeasure6: string
	strMeasure7: string
	strMeasure8: string
	strMeasure9: string
	strMeasure10: string
	strMeasure11: string
	strMeasure12: string
	strMeasure13: string
	strMeasure14: string
	strMeasure15: string
	strMeasure16: any
	strMeasure17: any
	strMeasure18: any
	strMeasure19: any
	strMeasure20: any
	strSource: any
	strImageSource: any
	strCreativeCommonsConfirmed: any
	dateModified: any
}

export interface Category {
	idCategory: string
	strCategory: string
	strCategoryThumb: string
	strCategoryDescription: string
}

export const getIngredients = (meal: Meal) => {
	const ingredients: { name: string; measurement: null | string }[] = []

	for (const [key, value] of Object.entries(meal)) {
		if (!key.startsWith("strIngredient")) continue

		if (!value) continue

		const keyIndex = extractNumber(key)

		if (keyIndex === null) continue

		const index = keyIndex - 1

		// @ts-expect-error
		const measurement = meal[`strMeasure${keyIndex + 1}`]

		ingredients[index] = { name: value, measurement }
	}

	return ingredients
}

function extractNumber(str: string) {
	const match = str.match(/\d+/)
	return match ? Number.parseInt(match[0]) : null
}

function artificalDelay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}
