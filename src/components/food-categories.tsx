import Link from "next/link"
import { getCategories } from "~/utils/api"

export const FoodCategories = async () => {
	const categories = await getCategories()

	return (
		<div>
			{categories.map((category) => (
				<Link key={category.idCategory} href={`/category/${category.idCategory}`}>
					{category.strCategory}
				</Link>
			))}
		</div>
	)
}
