import Link from 'next/link';
import { getPostsByTag, getTagMap } from '@/lib/blog';
import { PostCard } from '@/components/PostCard';

type Props = {
  params: { tag: string };
};

export function generateStaticParams() {
  return getTagMap().map((item) => ({ tag: item.tag }));
}

export function generateMetadata({ params }: Props) {
  return {
    title: `标签: ${params.tag} | EE Lab`
  };
}

export default function TagPostsPage({ params }: Props) {
  const posts = getPostsByTag(params.tag);

  return (
    <section className="container">
      <h1>
        标签 #{params.tag} <span style={{ color: 'var(--muted)', fontSize: '1rem' }}>({posts.length})</span>
      </h1>
      <Link href="/tags" style={{ color: 'var(--primary)' }}>
        ← 全部标签
      </Link>
      <div className="grid" style={{ marginTop: '.8rem' }}>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
