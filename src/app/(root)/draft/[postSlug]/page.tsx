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

import { getDraft } from "@/lib/draft";
import { convertToHumanReadableFormat } from "@/lib/utils";

export default async function Post({ params }) {
  const postSlug = params.postSlug;
  let post: any = null;

  try {
    post = await getDraft(postSlug);
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
