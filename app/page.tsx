import Link from 'next/link';
import { Cpu, Wrench, Radio, BookOpenText } from 'lucide-react';
import { getLatestPosts } from '@/lib/blog';
import { PostCard } from '@/components/PostCard';

const skills = ['嵌入式系统设计', 'PCB 设计与调试', '电源与信号完整性', 'Python 自动化测试', 'STM32 / ESP32'];

const featuredProjects = [
  {
    name: '模块化环境监测节点',
    desc: '低功耗采集 + LoRa 回传，支持 OTA 升级与远程诊断。'
  },
  {
    name: '高速接口评估板',
    desc: '针对 USB3.0/千兆以太网进行 SI 测试与眼图分析。'
  },
  {
    name: '产线校准平台',
    desc: '硬件治具 + 自动化脚本，提升生产测试效率 40%+。'
  }
];

export default function HomePage() {
  const latest = getLatestPosts(3);

  return (
    <div className="container">
      <section className="card fade-up" style={{ padding: '1.2rem 1.2rem' }}>
        <p className="tag" style={{ margin: 0, width: 'fit-content' }}>
          Hardware × Embedded × Reliability
        </p>
        <h1 style={{ marginBottom: '.5rem' }}>你好，我是 Zhiyang，一名硬件/电子工程师</h1>
        <p style={{ marginTop: 0, color: 'var(--muted)' }}>
          专注硬件系统架构、嵌入式开发与工程化交付。这个博客记录我的项目复盘、技术笔记与踩坑经验。
        </p>
        <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
          <Link className="tag" href="/blog">
            浏览文章
          </Link>
          <Link className="tag" href="/search">
            立即搜索
          </Link>
        </div>
      </section>

      <section className="card" style={{ padding: '1rem' }}>
        <h2 className="section-title">
          <Cpu size={18} style={{ verticalAlign: 'text-bottom' }} /> 核心技能
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
          {skills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="card" style={{ padding: '1rem' }}>
        <h2 className="section-title">
          <Wrench size={18} style={{ verticalAlign: 'text-bottom' }} /> 精选项目
        </h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
          {featuredProjects.map((project) => (
            <article key={project.name} className="card" style={{ padding: '.9rem', background: 'rgba(8,14,26,.86)' }}>
              <h3 style={{ margin: '0 0 .45rem' }}>{project.name}</h3>
              <p style={{ margin: 0, color: 'var(--muted)' }}>{project.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">
          <BookOpenText size={18} style={{ verticalAlign: 'text-bottom' }} /> 最新文章
        </h2>
        <div className="grid">
          {latest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <Link href="/blog" style={{ display: 'inline-flex', marginTop: '.8rem', color: 'var(--primary)' }}>
          查看全部文章 →
        </Link>
      </section>

      <section className="card" style={{ padding: '1rem' }}>
        <h2 className="section-title">
          <Radio size={18} style={{ verticalAlign: 'text-bottom' }} /> 联系方式
        </h2>
        <p style={{ margin: 0, color: 'var(--muted)' }}>
          Email: zhiyang.ee@example.com · GitHub: github.com/zhiyang-ee · Location: Shenzhen
        </p>
      </section>
    </div>
  );
}
