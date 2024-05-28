import { getDraft } from "@/lib/draft";
import { convertToHumanReadableFormat } from "@/lib/utils";
import styles from "@/styles/Post.module.css";

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
    <main className="font-sans">
      <div className={`${styles.container}`}>
        <article className={`${styles.article}`}>
          {post.title && <h1>{post.title}</h1>}
          {post.excerpt && <div className="text-xl text-gray-300">{post.excerpt}</div>}
          {post.published_at && <p className="text-xs">{convertToHumanReadableFormat(post.published_at)}</p>}
          {post.feature_image && <img src={post.feature_image} alt={post.title} />}
          {post.html && <div dangerouslySetInnerHTML={{ __html: post.html }} />}
        </article>
      </div>
    </main>
  );
}
