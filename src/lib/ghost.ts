import GhostContentAPI from "@tryghost/content-api";

export const ghostApi = new GhostContentAPI({
  url: process.env.GHOST_URL as string,
  key: process.env.GHOST_CONTENT_API_KEY as string,
  version: "v5.0",
  // @ts-ignore
  makeRequest: ({ url, method, params, headers }) => {
    let apiUrl = new URL(url);

    Object.keys(params).forEach((key) => {
      const value = params[key];
      if (Array.isArray(value)) {
        let arrayValue = value.join(",");
        apiUrl.searchParams.set(key, arrayValue);
      } else {
        apiUrl.searchParams.set(key, value);
      }
    });

    return fetch(apiUrl, { method, headers, next: { revalidate: 0 } })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return { data: await res.json() };
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  },
});
