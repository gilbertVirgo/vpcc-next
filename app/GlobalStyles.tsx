"use client";

import breakpoint from "@/breakpoint";
import { createGlobalStyle } from "styled-components";
import media from "@/media";

export default createGlobalStyle`
    * {
        margin: 0;
    }

    body {
        position: relative;
    }

    img, iframe, video {
        width: 100%;
        display: block;
        height: auto;
    }

    iframe {
        border: none;
    }

    h1 {
        font-family: var(--font-londrina-solid), sans-serif;
        text-transform: uppercase;

        ${media(0, breakpoint.md)} {
            font-size: 90px;
            line-height: 70px;
        }

        ${media(breakpoint.md)} {
            font-size: 200px;
            line-height: 160px;
        }
    }

    a, p, li {
        font-family: var(--font-nunito), sans-serif;

        ${media(0, breakpoint.md)} {
            font-size: 24px;
            line-height: 32px;
        }

        ${media(breakpoint.md)} {
            font-size: 32px;
            line-height: 48px;
        }
    }
`;
