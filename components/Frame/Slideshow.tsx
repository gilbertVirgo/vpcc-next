import { PrismicNextImage } from "@prismicio/next";
import useTicker from "./hooks/useTicker"

export default ({images}) => {
    const index = useTicker({limit: images.length, intervalInSeconds: 2});

    return <PrismicNextImage field={images[index].image} />
}