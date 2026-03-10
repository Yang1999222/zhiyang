import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug);
  return {
    title: post ? `${post.title} | EE Lab` : '文章不存在'
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="card" style={{ padding: '1.2rem' }}>
      <Link href="/blog" style={{ color: 'var(--primary)' }}>
        ← 返回列表
      </Link>
      <h1 style={{ marginBottom: '.3rem' }}>{post.title}</h1>
      <p style={{ marginTop: 0, color: 'var(--muted)' }}>{post.date}</p>
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
        {post.tags.map((tag) => (
          <Link className="tag" href={`/tags/${tag.toLowerCase()}`} key={tag}>
            #{tag}
          </Link>
        ))}
      </div>
      <hr style={{ borderColor: 'var(--border)', margin: '1rem 0' }} />
      <MarkdownRenderer content={post.content} />
    </article>
  );
}
