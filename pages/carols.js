import CarolServiceBanner from "@/components/CarolServiceBanner";
import CarolServiceInfo from "@/components/CarolServiceInfo";
import Head from "next/head";
import Section from "@/components/Section";

export default () => {
	return (
		<>
			<Head>
				<title>Carols | Victoria Park Community Church</title>
			</Head>
			<Section>
				<CarolServiceBanner />
			</Section>
			<Section>
				<CarolServiceInfo />
			</Section>
		</>
	);
};
