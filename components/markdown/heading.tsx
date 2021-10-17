import { FC, Fragment } from "react"
import { MarkdownHeadingLayout } from "./styles"

export const MarkdownHeading: FC= ({ children }) => {

    return (
        <Fragment>
            <MarkdownHeadingLayout>
                { children }
            </MarkdownHeadingLayout>
        </Fragment>
    )
}