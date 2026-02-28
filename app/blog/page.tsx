import { getAllPosts } from '@/lib/blog';
import { PostCard } from '@/components/PostCard';

export const metadata = {
  title: '博客 | EE Lab'
};

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <section className="container">
      <h1 style={{ marginBottom: 0 }}>博客文章</h1>
      <p style={{ marginTop: '.3rem', color: 'var(--muted)' }}>按发布时间倒序展示，共 {posts.length} 篇。</p>
      <div className="grid">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
