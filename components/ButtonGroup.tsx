import breakpoint from "@/breakpoint";
import media from "@/media";
import styled from "styled-components";
import theme from "@/theme";

export default styled.div`
    display: flex;
    gap: ${theme.gutter}px;
    grid-column: content;

    ${media(0, breakpoint.md)} {
        flex-direction: column; 
    }

    ${media(breakpoint.md)} {
        flex-direction: row;
    }
    
    * { flex: 1 }
`