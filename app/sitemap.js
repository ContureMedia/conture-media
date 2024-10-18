import { fetchBlogs } from "./components/fetchBlogs";

export default async function sitemap() {
  const blogs = await fetchBlogs();

  const staticUrls = [
    {
      url: "https://www.conturemedia.com/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.conturemedia.com/price",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.conturemedia.com/contact",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.conturemedia.com/faq",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.conturemedia.com/book",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.conturemedia.com/blog",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.conturemedia.com/more",
      lastModified: new Date().toISOString(),
    },
  ];

  const blogUrls = blogs.map((blog) => {
    const lastModified = new Date(blog.updatedAt);
    return {
      url: `https://www.conturemedia.com/blog/${blog.slug}`,
      lastModified: isNaN(lastModified)
        ? new Date().toISOString()
        : lastModified.toISOString(),
    };
  });

  return [...staticUrls, ...blogUrls];
}
