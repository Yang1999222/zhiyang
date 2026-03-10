import Link from 'next/link';
import { getTagMap } from '@/lib/blog';

export const metadata = {
  title: '标签 | EE Lab'
};

export default function TagsPage() {
  const tags = getTagMap();

  return (
    <section className="container">
      <h1>标签导航</h1>
      <div className="card" style={{ padding: '1rem', display: 'flex', flexWrap: 'wrap', gap: '.7rem' }}>
        {tags.map((item) => (
          <Link key={item.tag} href={`/tags/${item.tag}`} className="tag">
            #{item.tag} ({item.count})
          </Link>
        ))}
      </div>
    </section>
  );
}
