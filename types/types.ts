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