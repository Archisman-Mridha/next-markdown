import { DiReact } from "react-icons/di"
import { BsMarkdown } from "react-icons/bs"
import { Fragment } from "react"

export function getTagIcon(tagName: string) {

    switch(tagName) {

        case "react":
            return <DiReact size= { 20 } />

        case "markdown":
            return <BsMarkdown size= { 20 } />

        default:
            return <Fragment />
    }
}