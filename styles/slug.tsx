import { constants } from "constants/constants"
import styled from "styled-components"

export const MainLayout= styled.div`

    max-width: 900px;
    margin: 0 auto 7.5rem auto;
`

export const LogoWrapper= styled.div`

    width: 100%;
    position: relative;
    height: 150px;
    margin-bottom: 3rem;

    svg {
        position: absolute;
        top: 0;
        right: 10%;
    }

    @media (max-width: ${ constants.breakPoints.mobile }) {
        margin-bottom: 2rem;
        height: 40px;

        svg {
            height: 40px;
            width: 40px;
            right: 1rem;
        }
    }
`

export const Heading= styled.div`

    font-weight: 800;
    font-size: 50px;
    line-height: 120%;
    margin-bottom: 1rem;

    @media (max-width: ${ constants.breakPoints.mobile }) {
        font-size: 35px;
    }
`

export const SubHeading= styled.div`

    font-weight: 600;
    font-size: 25px;
    margin-bottom: 1.5rem;

    @media (max-width: ${ constants.breakPoints.mobile }) {
        font-size: 18px;
        margin-bottom: 1rem;
    }
`

export const TagLayout= styled.div`

    display: flex;
    margin-bottom: 6rem;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`

export const TagCard= styled.div`

    background: linear-gradient(to right bottom, rgba(250, 250, 250, 0.9), rgba(217, 217, 217, 0.1));
    backdrop-filter: blur(35px);
    border-radius: 35px;
    padding: 7.5px 1.5rem;
    margin-right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid white;
    color: black;
    flex-shrink: 0;
    cursor: pointer;

    svg {
        margin-right: 10px;
    }
`