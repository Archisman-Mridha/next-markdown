import { createGlobalStyle } from "styled-components"

export const GlobalStyles= createGlobalStyle`

    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
    }

    html {
        font-size: 16px;

        body {
            overflow-x: hidden;
            font-family: "Poppins";
            color: white;

            &:before {
                position: fixed;
                width: 100vw;
                height: 100vh;
                background: linear-gradient(to right bottom, rgb(255, 91, 91), rgb(97, 94, 255));
                background-size: cover;
                background-repeat: no-repeat;
                content: "";
                z-index: -100;
                top: 0;
                left: 0;
            }

            .blog-section {
                padding-top: 7.5rem;
            }

            section {
                padding: 1rem 10px;
                min-height: 100vh;

                code {
                    font-family: Hasklig !important;
                    font-size: 17.5px !important;
                    line-height: 26px !important;

                    @media screen and (max-width: 480px) {
                        font-size: 14.5px !important;
                        line-height: 22px !important;
                    }
                }
            }
        }
    }
`