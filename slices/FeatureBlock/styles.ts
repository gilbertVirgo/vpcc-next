"use client";

import {Grid} from "@/components";
import breakpoint from "@/breakpoint";
import media from "@/media";
import styled from "styled-components";
import theme from "@/theme";

export const Wrapper = styled(Grid)`
	${media(0, breakpoint.md)} {
		padding: ${theme.gutter * 2}px 0;
	}

	${media(breakpoint.md)} {
		padding: ${theme.gutter * 3}px 0;
	}

	&[data-text-over-image="true"] {
		place-items: center;

		h1, .breakout {
			grid-row: 1;
		}
		h1 {
			z-index: 1; 
		}
	}

	h1 {
		text-align: center;
	}
`;

