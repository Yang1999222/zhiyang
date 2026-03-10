import { SearchClient } from '@/components/SearchClient';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: '搜索 | EE Lab'
};

export default function SearchPage() {
  const posts = getAllPosts();

  return (
    <section className="container">
      <h1>文章搜索</h1>
      <SearchClient posts={posts} />
    </section>
  );
}
