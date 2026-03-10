import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="card" style={{ padding: '1.2rem' }}>
      <h1>页面未找到</h1>
      <p style={{ color: 'var(--muted)' }}>你访问的页面不存在，可能已经被移动或删除。</p>
      <Link href="/" style={{ color: 'var(--primary)' }}>
        返回首页
      </Link>
    </section>
  );
}
