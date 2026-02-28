import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'EE Lab | 电子工程师个人博客',
  description: '硬件/电子工程师风格个人博客，分享嵌入式、PCB 与工程实践。'
};

const navItems = [
  { href: '/', label: '首页' },
  { href: '/blog', label: '博客' },
  { href: '/tags', label: '标签' },
  { href: '/search', label: '搜索' }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <header style={{ borderBottom: '1px solid var(--border)', backdropFilter: 'blur(8px)' }}>
          <nav
            style={{
              width: 'min(1100px, 92vw)',
              margin: '0 auto',
              height: 66,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Link href="/" style={{ fontWeight: 700, letterSpacing: '.04em', color: 'var(--primary)' }}>
              EE-LAB.STUDIO
            </Link>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--muted)' }}>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{ borderTop: '1px solid var(--border)', padding: '1.4rem 0', color: 'var(--muted)' }}>
          <div style={{ width: 'min(1100px, 92vw)', margin: '0 auto' }}>
            © {new Date().getFullYear()} EE Lab · Build with Next.js App Router
          </div>
        </footer>
      </body>
    </html>
  );
}
