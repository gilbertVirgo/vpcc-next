import Link from "next/link";
import breakpoint from "@/breakpoint";
import media from "@/media";
import styled from "styled-components";
import theme from "@/theme";

const Wrapper = styled(Link)`
    text-decoration: none;
    display: block;
    border-radius: 9999px;
    text-align: center;
    font-weight: 900;
    cursor: pointer;

    ${media(0, breakpoint.sm)} {
        padding: ${theme.gutter / 1.2}px ${theme.gutter}px;
        font-size: 24px;
    }

    ${media(breakpoint.sm)} {
        padding: ${theme.gutter}px ${theme.gutter * 2}px;
        font-size: 32px;
    }
`;

export default ({button_title, button_link, button_theme}) => {
    const linkUrl = !!button_link.url ? button_link.url : "#";

    return (
        <Wrapper href={linkUrl} style={{
            backgroundColor: button_theme.data.background_color,
            color: button_theme.data.text_color
        }}>{button_title}</Wrapper>
    )
}