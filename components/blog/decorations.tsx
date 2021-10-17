import { FC, Fragment } from "react";
import Link from "next/link"
import Blob from "../../images/blobs.png"
import SideImage from "../../images/side-image.png"
import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { BlobsLayout, GithubLinkLayout, SideImageLayout } from "./styles";

export const Decorations: FC= ( ) => {

    return (
        <Fragment>
            <BlobsLayout>
                <Image src= { Blob } className= "blobs" alt= "" />
            </BlobsLayout>
            <GithubLinkLayout>
                <FaGithub size= { 22 } />
                <Link href= "/">Github</Link>
            </GithubLinkLayout>
            <SideImageLayout>
                <Image src= { SideImage } alt= "" />
            </SideImageLayout>
        </Fragment>
    )
}