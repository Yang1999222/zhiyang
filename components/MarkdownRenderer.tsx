'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeProps = {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
};

function CodeBlock({ className, children }: { className?: string; children: string }) {
  const [copied, setCopied] = useState(false);
  const language = className?.replace('language-', '') || 'text';

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(children);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        }}
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 1,
          background: '#0d1b34',
          color: '#a5d8ff',
          border: '1px solid #2f4366',
          borderRadius: 8,
          cursor: 'pointer',
          padding: '.2rem .5rem',
          fontSize: '.75rem'
        }}
      >
        {copied ? '已复制' : '复制'}
      </button>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        PreTag="div"
        customStyle={{ borderRadius: 12, paddingTop: '2rem' }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ inline, className, children }: CodeProps) {
            const text = String(children ?? '').replace(/\n$/, '');
            if (inline) {
              return (
                <code style={{ background: '#1d2740', padding: '0.1rem 0.35rem', borderRadius: 6 }}>
                  {children}
                </code>
              );
            }
            return <CodeBlock className={className} children={text} />;
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
