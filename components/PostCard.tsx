import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="card fade-up" style={{ padding: '1rem 1.1rem' }}>
      <p style={{ margin: 0, color: 'var(--muted)', fontSize: '.88rem' }}>{post.date}</p>
      <h3 style={{ margin: '.4rem 0' }}>
        <Link href={`/blog/${post.slug}`} style={{ color: 'var(--text)' }}>
          {post.title}
        </Link>
      </h3>
      <p style={{ margin: '.3rem 0 0', color: 'var(--muted)' }}>{post.description}</p>
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.85rem' }}>
        {post.tags.map((tag) => (
          <Link href={`/tags/${tag.toLowerCase()}`} key={tag} className="tag">
            #{tag}
          </Link>
        ))}
      </div>
    </article>
  );
}
