import { getPost } from "@/lib/content";
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
    <main className="bg-white dark:bg-gray-900 font-sans">
      <div className={`${styles.container}`}>
        <article className={`${styles.article}`}>
          <h1>{post.title}</h1>
          {/* add feature image */}
          <img src={post.feature_image} alt={post.title} />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </div>
    </main>
  );
}
