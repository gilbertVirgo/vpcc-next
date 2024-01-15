import breakpoint from "@/breakpoint";
import media from "@/media";
import styled from "styled-components";
import theme from "@/theme";

export default styled.div`
	display: grid;
	gap: ${theme.gutter}px;

	${media(0, breakpoint.md)} {
		grid-template-columns: 0 [content-start] 1fr [content-end] 0;
		column-gap: ${theme.gutter}px;
		row-gap: ${theme.gutter}px;
	}

	${media(breakpoint.md)} {
		grid-template-columns:
			auto [breakout-start] min(
				calc((100% / 12) * 4),
				calc(80px + 80px + ${theme.gutter}px)
			)
			[content-start] min(calc((100% / 12) * 8), ${breakpoint.md}px)
			[content-end] min(
				calc((100% / 12) * 4),
				calc(80px + 80px + ${theme.gutter}px)
			)
			[breakout-end] auto;
		column-gap: ${theme.gutter}px;
		row-gap: ${theme.gutter * 3}px;
	}

	.breakout {
		${media(0, breakpoint.md)} {
			grid-column: content;
		}
		${media(breakpoint.md)} {
			grid-column: breakout;
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	ul,
	ol {
		grid-column: content;
	}
`;
