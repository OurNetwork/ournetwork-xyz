import "@/styles/content.css";
import "@/styles/post.css";
import "@/styles/mdx.css";
import "@/styles/audio.css";
import "@/styles/blockquote.css";
import "@/styles/bookmark.css";
import "@/styles/button.css";
import "@/styles/callout.css";
import "@/styles/collection.css";
import "@/styles/file.css";
import "@/styles/gallery.css";
import "@/styles/header_v2.css";
import "@/styles/header.css";
import "@/styles/toggle.css";
import "@/styles/video.css";

import { convertToHumanReadableFormat } from "@/lib/utils";
import { siteMetadata } from "@/constants";
import type { Metadata } from "next";
import { getPost } from "@/lib/content";
import { Post } from "@/components/shared/Post";

export async function generateMetadata({ params }): Promise<Metadata> {
  const postSlug = params.postSlug;
  const post = await getPost(postSlug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "website",
      title: post.title,
      description: post.excerpt,
      siteName: siteMetadata.name,
      images: [`${post.feature_image}`],
    },
  };
}

export default async function PostPage({ params }) {
  const postSlug = params.postSlug;
  let post: any = null;

  try {
    post = await getPost(postSlug);
  } catch (error) {
    console.error("Error fetching post:", error);
  }

  if (!post) {
    return <div>Post unavailable</div>;
  }

  return (
    <div className="post-page font-sans max-w-7xl pt-8 pb-4">
      <Post post={post} />
    </div>
  );
}
