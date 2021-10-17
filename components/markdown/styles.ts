import { constants } from "constants/constants"
import styled from "styled-components"

export const MarkdownHeadingLayout= styled.h1`

    font-size: 30px;
    font-weight: 700;
    margin: 3.5rem 0 1rem 0;
    color: black;

    @media (max-width: ${ constants.breakPoints.mobile }) {
        font-size: 25px;
        margin-bottom: 1.5rem;
    }
`

export const MarkdownParagraphLayout= styled.p`

    line-height: 160%;
    margin: 10px 0;
    font-size: 17px;

    @media (max-width: ${ constants.breakPoints.mobile }) {
        font-size: 14px;
    }
`