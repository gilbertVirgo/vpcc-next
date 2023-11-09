import CarolServiceInfo from "@/components/CarolServiceInfo";
import ContactInfo from "@/components/ContactInfo";
import DoctrinalBasisInfo from "@/components/DoctrinalBasisInfo";
import Grid from "@/components/Grid";
import Head from "next/head";
import MeetingPlaceInfo from "@/components/MeetingPlaceInfo";
import Nav from "../components/Nav";
import Section from "@/components/Section";
import WebsiteUnderConstruction from "@/components/WebsiteUnderConstruction";

export default function Home() {
	return (
		<>
			<Head>
				<title>Victoria Park Community Church</title>
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
			{/* Sections */}
			{[
				Nav,
				WebsiteUnderConstruction,
				MeetingPlaceInfo,
				CarolServiceInfo,
				DoctrinalBasisInfo,
				ContactInfo,
			].map((Element) => (
				<Section>{<Element />}</Section>
			))}
		</>
	);
}
