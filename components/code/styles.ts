import { constants } from "constants/constants"
import styled from "styled-components"

export const CodeLayout= styled.div`

    background: #1e1e1e;
    border-radius: 10px;
    padding: 1rem 10px 3px;
    margin: 1rem 0 2rem 0;
`

export const WindowControls= styled.div`

    width: fit-content;
    display: flex;
    padding: 10px 0 5px;

    span {
        height: 18px;
        width: 18px;
        border-radius: 50%;
        margin-right: 8px;

        &:first-child {
            margin-left: 10px;
        }
    }

    @media (max-width: ${ constants.breakPoints.mobile }) {
        padding: 3px 0 0;

        span {
            height: 12px;
            width: 12px;
        }
    }
`