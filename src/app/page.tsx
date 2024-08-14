import { Heading } from "@pixelshades/ui/components"

export default async function Home() {
	return (
		<div className="mx-auto w-full space-y-layout-sm py-layout-sm">
			<Heading>Food Demo App</Heading>
			<p>Build here</p>
		</div>
	)
}

export const runtime = "edge"
