import fs from "fs"
import path from "path"
import matter from "gray-matter"

const root= process.cwd( )

export async function getFiles( ) {

    return fs.readdirSync(
        path.join(root, "markdowns"), "utf-8"
    )
}

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

export async function getAllPostsWithFrontMatter( ) {

    const files= fs.readdirSync(
        path.join(root, "markdowns")
    )

    return files.reduce(

        //@ts-ignore
        (previousReturnedValue, currentValue) => {

            const source= fs.readFileSync(
                path.join(root, "markdowns", currentValue), "utf-8"
            )

            const { data }= matter(source)

            return [
                
                {
                    frontMatter: data,
                    slug: currentValue.replace(".md", "")
                },
                ...previousReturnedValue
            ]
        }, [ ]
    )
}