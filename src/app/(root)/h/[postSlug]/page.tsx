import { siteMetadata } from "@/constants";
import { getPost } from "@/lib/content";
import { convertToHumanReadableFormat } from "@/lib/utils";

import styles from "@/styles/Post.module.css";
import "@/styles/content.css";
import "@/styles/preflight.css";
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
import "@/styles/nft.css";
import "@/styles/product.css";
import "@/styles/signup.css";
import "@/styles/toggle.css";
import "@/styles/video.css";

import type { Metadata, ResolvingMetadata } from "next";

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

export default async function Post({ params }) {
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
    <main className="font-sans">
      <div className={`${styles.container}`}>
        <article className="gh-article-post">
          {post.title && <h1>{post.title}</h1>}
          {post.excerpt && <div className="text-xl text-gray-300">{post.excerpt}</div>}
          {post.published_at && <p className="text-xs">{convertToHumanReadableFormat(post.published_at)}</p>}
          {post.feature_image && <img src={post.feature_image} alt={post.title} />}
          {post.html && <section className="gh-content gh-canvas is-body" dangerouslySetInnerHTML={{ __html: post.html }}></section>}
        </article>
      </div>
    </main>
  );
}
