import styled from "styled-components"

export const GithubLinkLayout= styled.div`

    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    align-items: center;

    a {
        color: white;
        margin-left: 10px;
    }

    @media (max-width: 1150px) {
        position: absolute;
        right: 1rem;
        top: 1rem;
    }
`

export const BlobsLayout= styled.div`

    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    max-width: 45rem;

    @media screen and (max-width: 480px) {
        width: 75%;
    }
`

export const SideImageLayout= styled.div`

    position: fixed;
    top: 12vh;
    right: 0;
    z-index: -1;
    max-width: 22rem;

    @media screen and (max-width: 1100px) {
        display: none;
    }
`