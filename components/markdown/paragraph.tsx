import { FC, Fragment } from "react"
import { MarkdownParagraphLayout } from "./styles"

export const MarkdownParagraph: FC= ({ children }) => {

    return (
        <Fragment>
            <MarkdownParagraphLayout>
                { children }
            </MarkdownParagraphLayout>
        </Fragment>
    )
}