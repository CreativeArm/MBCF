import { blogPosts } from "../../../data/blogPosts";
import BlogDetailClient from "./BlogDetailClient";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;
  return <BlogDetailClient id={id} />;
}
