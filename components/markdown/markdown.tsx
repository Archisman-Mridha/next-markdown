import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Codeblock } from "../code/code";
import { MarkdownHeading } from "./heading";
import { MarkdownParagraph } from "./paragraph";

interface markdownContentProps {
    markdownBody: string
}

export const MarkdownContent: FC<markdownContentProps>= ({ markdownBody }) => {

    return (
        <ReactMarkdown
            components= {{
                code: ({ node, inline, className, children, ...props }) => {
                    const match= /language-(\w+)/.exec(className || "")

                    if(!inline && match) return (
                        <Codeblock
                            language= { match[1] }
                            value= { String(children).replace(/\n$/, "") }
                        />
                    )

                    else return <code className= { className } { ...props }>{ children }</code>
                },

                h1: MarkdownHeading,
                p: MarkdownParagraph
            }}
        >
            { markdownBody }
        </ReactMarkdown>
    )
}