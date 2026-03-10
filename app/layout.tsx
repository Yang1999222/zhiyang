import type { Metadata, Route } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'EE Lab | 电子工程师个人博客',
  description: '硬件/电子工程师风格个人博客，分享嵌入式、PCB 与工程实践。',
}

const navItems: { href: Route; label: string }[] = [
  { href: '/', label: '首页' },
  { href: '/blog', label: '博客' },
  { href: '/tags', label: '标签' },
  { href: '/search', label: '搜索' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <header
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '1.25rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 700,
              letterSpacing: '0.08em',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            EE-LAB.STUDIO
          </Link>

          <nav style={{ display: 'flex', gap: '1rem', color: 'var(--muted)' }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1rem' }}>
          {children}
        </main>

        <footer
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '2rem 1rem 3rem',
            color: 'var(--muted)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          © {new Date().getFullYear()} EE Lab · Build with Next.js App Router
        </footer>
      </body>
    </html>
  )
}