import { PrismicNextImage } from "@prismicio/next";
import Slideshow from "./Slideshow";
import StopMotion from "./StopMotion";
import { Wrapper } from "./styles"

const map = {
    map_frame: ({embed_link}) => <iframe frameBorder={0} src={embed_link.url}/>,
    still_frame: ({image}) => <PrismicNextImage field={image} />,
    event: ({image}) => <PrismicNextImage field={image} />,
    slideshow_frame: Slideshow,
    stop_motion_frame: StopMotion
}

export default (frame) => {
    if(!frame.data) {
        throw new Error("No frame.data");
    }

    const Component = map[frame.type];

    return (
        <Wrapper>
            <Component {...frame.data} />
        </Wrapper>
    )
}