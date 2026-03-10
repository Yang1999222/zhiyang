'use client';

import { useMemo, useState } from 'react';
import { PostCard } from '@/components/PostCard';
import type { BlogPost } from '@/lib/blog';

export function SearchClient({ posts }: { posts: BlogPost[] }) {
  const [keyword, setKeyword] = useState('');

  const results = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter((post) => {
      const text = `${post.title} ${post.description} ${post.tags.join(' ')} ${post.content}`.toLowerCase();
      return text.includes(q);
    });
  }, [keyword, posts]);

  return (
    <div className="container">
      <input
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="搜索标题、描述、标签或正文内容"
        style={{
          border: '1px solid var(--border)',
          borderRadius: 12,
          background: 'rgba(10,16,30,.8)',
          color: 'var(--text)',
          padding: '.75rem .95rem',
          outline: 'none'
        }}
      />
      <p style={{ margin: 0, color: 'var(--muted)' }}>找到 {results.length} 篇文章</p>
      <div className="grid">
        {results.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
