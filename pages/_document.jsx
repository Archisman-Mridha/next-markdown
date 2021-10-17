import Document, { Head, Main, NextScript, Html } from "next/document"
import { ServerStyleSheet } from "styled-components";

export default class NextDocument extends Document {

    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet( );

        const page = renderPage(
            (App) => (
                (props) => sheet.collectStyles(<App {...props} />)
            )
        )

        return {
            ...page,
            styleTags: sheet.getStyleElement( )
        }
    }

    render( ) {
        return (
            <Html>
                <Head>
                    <title>Next | Markdown</title>
                    {
                        //@ts-ignore
                        this.props.styleTags
                    }
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}