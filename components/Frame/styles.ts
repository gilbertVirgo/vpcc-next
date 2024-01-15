"use client";

import breakpoint from "@/breakpoint";
import media from "@/media";
import styled from "styled-components";
import theme from "@/theme";

export const Wrapper = styled.div.attrs({className: "breakout"})`
    width: 100%; // For some reason, this is necessary. Not sure why.
    border-radius: ${theme.borderRadius}px;
    box-shadow: 0 0 15px ${theme.color.dark}40;
    overflow: clip;

    ${media(0, breakpoint.sm)} {
        /* This is a bodge for now. Should be using my 'sm' size 
        (see Prismic) but there doesn't seem to be a way to do 
        that yet. */
        img, video, iframe {
            object-fit: cover;
            aspect-ratio: 1 / 1;
        }
    }

    ${media(breakpoint.md)} {
        img, video, iframe {
            aspect-ratio: 16 / 9;
        }
    }
`