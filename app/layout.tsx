import { Londrina_Solid, Nunito } from 'next/font/google'

import GlobalStyles from "./GlobalStyles";
import Nav from '@/components/Nav';
import StyledComponentsRegistry from "./lib/registry";
import { createClient } from '@/prismicio';

const londrinaSolid = Londrina_Solid({ 
	subsets: ["latin"], 
	weight: "400",
	variable: "--font-londrina-solid"
});

const nunito = Nunito({ 
	subsets: ["latin"], 
	weight: ["500", "900"], 
	style: ["italic", "normal"],
	variable: "--font-nunito"
});

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
      		className={`${londrinaSolid.variable} ${nunito.variable}`}>
			<body>
				<StyledComponentsRegistry>
					<GlobalStyles />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
