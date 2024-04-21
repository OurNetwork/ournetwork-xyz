import { getPost } from "@/lib/content";
import { convertToHumanReadableFormat } from "@/lib/utils";
import styles from "@/styles/Post.module.css";

export default async function Post({ params }) {
  console.log(params);
  const postSlug = params.postSlug;
  const post = await getPost(postSlug);
  console.log(post);

  if (post === null) {
    return <div>Post not found</div>;
  }

  return (
    <main className="font-sans">
      <div className={`${styles.container}`}>
        <article className={`${styles.article}`}>
          <h1>{post.title}</h1>
          <div className="text-xl text-gray-300">{post.excerpt}</div>
          <p className="text-xs">{convertToHumanReadableFormat(post.published_at)}</p>
          <img src={post.feature_image} alt={post.title} />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </div>
    </main>
  );
}
