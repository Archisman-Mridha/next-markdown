import { FC, Fragment } from "react"
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { CodeLayout, WindowControls } from "./styles"

interface codeblockProps {

    language: string
    value: React.ReactNode
}

export const Codeblock: FC<codeblockProps>= ({ language, value }) => {

    return (
        <Fragment>
            <CodeLayout>
                <WindowControls>
                    {
                        controlColors.map(
                            (background, index) => (
                                <span key= { index } style= {{ background }} />
                            )
                        )
                    }
                </WindowControls>
                <SyntaxHighlighter language= { language } style= { vscDarkPlus }>
                    { value }
                </SyntaxHighlighter>
            </CodeLayout>
        </Fragment>
    )
}

const controlColors= ["rgb(255,95,86)", "rgb(255,189,46)", "rgb(39,201,63)"]