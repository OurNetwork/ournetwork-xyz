"use client";
import { useEffect } from "react";
import { convertToHumanReadableFormat } from "@/lib/utils";
import { LinkIcon } from "@heroicons/react/24/solid";
import cheerio from "cheerio";
import ReactDOM from "react-dom/client";
import toast, { Toaster } from "react-hot-toast";

export const Post = ({ post }) => {
  const addAnchorLinks = (htmlContent) => {
    const $ = cheerio.load(htmlContent);

    $("h1, h2, h3, h4, h5, h6").each(function () {
      const id = $(this).attr("id");
      if (id) {
        $(this).wrap('<div class="header-wrapper"></div>');
        $(this).prepend(`
          <a href="#${id}" class="header-anchor" title="Copy link to this section">
            <span class="icon-placeholder"></span>
          </a>
        `);
      }
    });

    return $.html();
  };

  const enhancedHtml = addAnchorLinks(post.html);

  useEffect(() => {
    const elements = document.querySelectorAll(".header-anchor");
    elements.forEach((element) => {
      element.addEventListener("click", (event) => {
        event.preventDefault();
        // @ts-ignore
        const url = new URL(window.location);
        // @ts-ignore
        url.hash = element.getAttribute("href");
        navigator.clipboard.writeText(url.toString()).then(() => {
          toast("Link copied.");
        });
      });

      const iconPlaceholder = element.querySelector(".icon-placeholder");
      if (iconPlaceholder) {
        const icon = document.createElement("span");
        iconPlaceholder.replaceWith(icon);
        const linkIcon = (
          <div className="!mr-8">
            <LinkIcon className="h-6 w-6 hover:bg-slate-200 rounded-full p-2" />
          </div>
        );
        ReactDOM.createRoot(icon).render(linkIcon);
      }
    });
  }, [enhancedHtml]);

  return (
    <article className="gh-article-post">
      <header className="gh-article-header gh-canvas pb-4 space-y-4">
        {post.title && <h1>{post.title}</h1>}
        {post.excerpt && <div className="text-xl text-gray-300">{post.excerpt}</div>}
        {post.published_at && <p className="text-xs">{convertToHumanReadableFormat(post.published_at)}</p>}
        {post.feature_image && <img src={post.feature_image} alt={post.title} />}
      </header>
      <section className="gh-content gh-canvas is-body" dangerouslySetInnerHTML={{ __html: enhancedHtml }}></section>
      <Toaster position="top-center" reverseOrder={false} />
    </article>
  );
};
