---
    title: Create a Blog using Markdown and Next.JS
    description: using react-syntax-highlighting
    tags:
      - react
      - markdown
---

# Project Setup

Create a next.js project with typescript support and install the required libraries.

```sh
npx create-next-app app --typescript
cd app

yarn add react-markdown react-syntax-highlighting gray matter
yarn add -D @types/react-syntax-highlighting
```

# Folder Structure

Make sure you have the pages folder. Along with that, make a markdown folder, lib folder and types.ts file in the root directory.

Inside the markdown put a readme.md file.

```md
---
    title: Create a Blog using Markdown and Next.JS
    description: using react-syntax-highlighting
    tags:
      - react
      - ab testing
---

<!-->rest of your content<-->
```

# A Blog Page

Let's see how to make a blog page.

First add these util functions in the lib/utils.ts fil. We take help of the gray-matter package to parse the readme.md file in the markdown folder and get the frontMatter and markdownBody from it.

```ts
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const root= process.cwd( )

export async function getPostBySlug(slug: string) {

    const source= fs.readFileSync(
        path.join(root, "markdowns", `${ slug }.md`), "utf-8"
    )

    const { data, content } = matter(source)

    return {
        frontMatter: data,
        markdownBody: content
    }
}
```

Since our project is in typescript, we need to make custom interfaces to denote the type of data extracted from the markdown. This will come into play when we use this data for rendering. The BlogPostProps interface represents the type of data that is extracted by gray-matter from the markdown file.

```ts
export interface BlogFrontMatter {

    title: string
    description: string
    tags: string[ ]
}

export interface BlogPostProps {

    slug: string
    siteTitle: string
    frontMatter: BlogFrontMatter
    markdownBody: any
}
```

In the index.tsx file write the tsx code. We use the getStaticProps function, to first extract the markdown data using the getPostBySlug util function and pass it as props to the next-page. This getStaticProps function gets executed before the page gets rendered.

```tsx
import { getFiles, getPostBySlug } from "@/lib/utils";
import { NextPage } from "next";
import { Params } from "next/dist/server/router";
import { FC, Fragment } from "react";
import ReactMarkdown from "react-markdown";
import { BlogPostProps } from "types/types";
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

export async function getStaticProps({ params }: Params) {
    const { frontMatter, markdownBody }= await getPostBySlug(params.slug)

    return {
        props: {
            frontMatter,
            markdownBody
        }
    }
}

const Blog: NextPage<BlogPostProps>= ({ frontMatter, markdownBody }) => {

    if(!frontMatter) return null

    else return (
        <Fragment>
            <section className= "blog-section">
                <MainLayout>
                    <Heading>{ frontMatter.title }</Heading>
                    <SubHeading>{ frontMatter.description }</SubHeading>

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
                            }
                        }}
                    >
                        { markdownBody }
                    </ReactMarkdown>
                </MainLayout>
            </section>
        </Fragment>
    )
}

export default Blog
```

Here we have used a custom react-component for the codeblocks in the markdown.

```tsx
interface codeblockProps {

    language: string
    value: React.ReactNode
}

const Codeblock: FC<codeblockProps>= ({ language, value }) => {

    return (
        <Fragment>
            <CodeLayout>
                <WindowControls>
                    <span />
                    <span />
                    <span />
                </WindowControls>
                <SyntaxHighlighter language= { language } style= { vscDarkPlus }>
                    { value }
                </SyntaxHighlighter>
            </CodeLayout>
        </Fragment>
    )
}
```