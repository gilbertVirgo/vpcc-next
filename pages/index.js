import CarolServiceInfo from "@/components/CarolServiceInfo";
import ContactInfo from "@/components/ContactInfo";
import DoctrinalBasisInfo from "@/components/DoctrinalBasisInfo";
import Head from "next/head";
import MeetingPlaceInfo from "@/components/MeetingPlaceInfo";
import Section from "@/components/Section";
import WebsiteUnderConstructionBanner from "@/components/WebsiteUnderConstructionBanner";

export default function Home() {
	return (
		<>
			<Head>
				<title>Home | Victoria Park Community Church</title>
			</Head>
			{/* Sections */}
			{[
				WebsiteUnderConstructionBanner,
				CarolServiceInfo,
				MeetingPlaceInfo,
				ContactInfo,
				DoctrinalBasisInfo,
			].map((Element) => (
				<Section>{<Element />}</Section>
			))}
		</>
	);
}
