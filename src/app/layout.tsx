import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { cn } from "@pixelshades/cn"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Food Demo App",
	description: "A demo app!",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html className="dark" lang="en">
			<body className={cn(inter.className, "min-h-screen bg-background text-foreground")}>
				<main className="container mx-auto">{children}</main>
			</body>
		</html>
	)
}
