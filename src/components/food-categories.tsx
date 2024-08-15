import { Link } from "@pixelshades/ui/components"
import { getCategories } from "~/utils/api"

export const FoodCategories = async () => {
	const categories = await getCategories()

	return (
		<div className="flex flex-col gap-2">
			{categories.map((category) => (
				<Link key={category.idCategory} href={`/category/${category.idCategory}`}>
					{category.strCategory}
				</Link>
			))}
		</div>
	)
}
