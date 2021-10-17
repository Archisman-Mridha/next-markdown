import { getPostBySlug } from "@/lib/utils"
import { NextPage } from "next"
import { Params } from "next/dist/server/router"
import { Fragment } from "react"
import { BlogPostProps } from "../types/types"
import { Heading, LogoWrapper, MainLayout, SubHeading, TagCard, TagLayout } from "styles/slug"
import NextLogo from "../svgs/next.svg"
import { getTagIcon } from "@/lib/get-tag-icon"
import { MarkdownContent } from "@/components/markdown/markdown"
import { Decorations } from "@/components/blog/decorations"

export async function getStaticProps({ params }: Params) {
    const { frontMatter, markdownBody }= await getPostBySlug("readme")

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
                <Decorations />

                <MainLayout>
                    <LogoWrapper>
                        <NextLogo fill= "white" />
                    </LogoWrapper>
                    <Heading>{ frontMatter.title }</Heading>
                    <SubHeading>{ frontMatter.description }</SubHeading>

                    <TagLayout>
                        {
                            frontMatter.tags.map(
                                (item, index) => (
                                    <TagCard key= { index }>
                                        { getTagIcon(item) }
                                        <span>{ item }</span>
                                    </TagCard>
                                )
                            )
                        }
                    </TagLayout>

                    <MarkdownContent markdownBody= { markdownBody } />
                </MainLayout>
            </section>
        </Fragment>
    )
}

export default Blog