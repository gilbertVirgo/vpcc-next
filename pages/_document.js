import { Head, Html, Main, NextScript } from "next/document";

import Nav from "@/components/Nav";
import Section from "@/components/Section";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="description"
					content="The Victoria Park Community Church website. Under construction"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/logo.svg" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;500;700&family=Josefin+Sans:wght@700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Section>
					<Nav />
				</Section>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
