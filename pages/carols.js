import CarolServiceBanner from "@/components/CarolServiceBanner";
import CarolServiceInfo from "@/components/CarolServiceInfo";
import CarolServiceLocation from "@/components/CarolServiceLocation";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Section from "@/components/Section";

export default () => {
	return (
		<>
			<NextSeo
				title="Carols | Victoria Park Community Church"
				description="We invite you to come join others from the local community to sing Christmas carols, eat mince pies, and hear what it's all about!"
				canonical="https://vpcc.church/carols"
				openGraph={{
					url: "https://vpcc.church/carols",
					title: "Carols | Victoria Park Community Church",
					description:
						"We invite you to come join others from the local community to sing Christmas carols, eat mince pies, and hear what it's all about!",
					images: [
						{
							url: "https://vpcc.church/assets/sm-carols-image.jpg",
							width: 2000,
							height: 1200,
							alt: "Carols | Victoria Park Community Church",
							type: "image/jpeg",
						},
					],
					siteName: "Victoria Park Community Church",
				}}
			/>
			<Head>
				<title>Carols | Victoria Park Community Church</title>
			</Head>
			{[CarolServiceBanner, CarolServiceLocation, CarolServiceInfo].map(
				(Element) => (
					<Section>{<Element />}</Section>
				)
			)}
		</>
	);
};
