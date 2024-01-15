import React from "react";

export default ({video, frames_per_second}: {video: {url: string}, frames_per_second: number}) => {

    const ref = React.useRef(null);

    React.useEffect(() => {
        const handleScroll = () => {
            if(!ref.current) return;

            const videoElement: HTMLVideoElement = ref.current,
                bounds = videoElement.getBoundingClientRect(),
                scrollRange = window.innerHeight + bounds.height,
                min = videoElement.offsetTop - window.innerHeight,
                max = min + scrollRange,
                durationInMilliseconds = videoElement.duration * 1000;

            if((window.scrollY >= min) && (window.scrollY <= max)) {
                const newTime = (window.scrollY - min) * durationInMilliseconds / scrollRange / 1000;

                if(videoElement.currentTime !== newTime) videoElement.currentTime = newTime;
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <video ref={ref} muted>
        <source src={video.url} type="video/mp4" />
    </video>
}