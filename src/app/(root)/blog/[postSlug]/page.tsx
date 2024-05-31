import "@/styled/content.css";
import "@/styled/post.css";
import "@/styled/mdx.css";
import "@/styled/audio.css";
import "@/styled/blockquote.css";
import "@/styled/bookmark.css";
import "@/styled/button.css";
import "@/styled/callout.css";
import "@/styled/collection.css";
import "@/styled/file.css";
import "@/styled/gallery.css";
import "@/styled/header_v2.css";
import "@/styled/header.css";
import "@/styled/nft.css";
import "@/styled/product.css";
import "@/styled/signup.css";
import "@/styled/toggle.css";
import "@/styled/video.css";

import { convertToHumanReadableFormat } from "@/lib/utils";
import { siteMetadata } from "@/constants";
import type { Metadata } from "next";
import { getPost } from "@/lib/content";

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
      <article className="gh-article-post">
        <header className="gh-article-header gh-canvas pb-4 space-y-4">
          {post.title && <h1>{post.title}</h1>}
          {post.excerpt && <div className="text-xl text-gray-300">{post.excerpt}</div>}
          {post.published_at && <p className="text-xs">{convertToHumanReadableFormat(post.published_at)}</p>}
          {post.feature_image && <img src={post.feature_image} alt={post.title} />}
        </header>
        <section className="gh-content gh-canvas is-body" dangerouslySetInnerHTML={{ __html: post.html }}></section>
      </article>
    </div>
  );
}
