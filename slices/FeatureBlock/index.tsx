/**
 * @typedef {import("@prismicio/client").Content.FeatureBlockSlice} FeatureBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeatureBlockSlice>} FeatureBlockProps
 * @param {FeatureBlockProps}
 */

import {Button, ButtonGroup, Frame} from "@/components";

import { PrismicRichText } from "@prismicio/react";
import { Wrapper } from "./styles";
import theme from "@/theme";

const FeatureBlock = ({ slice }) => {

	const { background_color, text_color } = slice.primary.theme.data,
	 	isEvent = slice.variation === "event";

	const hasButtons = isEvent || !!slice.items.length

	return (
		<Wrapper style={{backgroundColor: background_color, color: text_color}} data-text-over-image={slice.primary.text_over_image}>
			<h1>{slice.primary.title}</h1>
			{isEvent ? <Frame {...slice.primary.event}/> : <Frame {...slice.primary.frame} />}
			<PrismicRichText field={isEvent ? slice.primary.event.data.body : slice.primary.body} /> 
			{hasButtons && (<ButtonGroup>
				{isEvent
					? <Button button_title="RSVP" button_link={{url: `/event/${slice.primary.event.uid}`}} button_theme={{ data: { text_color: theme.color.light, background_color: theme.color.dark } }} />
					: slice.items.map((buttonProps, index) => <Button key={`button-${index}`} {...buttonProps}/>)
				}
			</ButtonGroup>)}
		</Wrapper>
	);
};

export default FeatureBlock;
