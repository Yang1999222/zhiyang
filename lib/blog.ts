import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  content: string;
};

const blogDir = path.join(process.cwd(), 'content', 'blog');

function normalizeTag(tag: string) {
  return tag.trim().toLowerCase();
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDir)) return [];

  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(blogDir, file), 'utf8');
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ''),
        title: String(data.title ?? 'Untitled'),
        date: String(data.date ?? ''),
        tags: Array.isArray(data.tags) ? data.tags.map((tag) => String(tag)) : [],
        description: String(data.description ?? ''),
        content
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getLatestPosts(limit = 3) {
  return getAllPosts().slice(0, limit);
}

export function getTagMap() {
  const map = new Map<string, number>();

  getAllPosts().forEach((post) => {
    post.tags.forEach((tag) => {
      const key = normalizeTag(tag);
      map.set(key, (map.get(key) ?? 0) + 1);
    });
  });

  return Array.from(map.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function getPostsByTag(tag: string) {
  const target = normalizeTag(tag);
  return getAllPosts().filter((post) => post.tags.some((item) => normalizeTag(item) === target));
}
