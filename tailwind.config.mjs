/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#000507',
        'bg-secondary': '#001016',
        fg: '#A8FFD4',
        muted: '#5FA88A',
        accent: '#3CFFAA',
        accent2: '#1FCC85',
        border: '#0A2A20',
        hover: '#021A14',
      },
      fontFamily: {
        heading: ["'JetBrains Mono', monospace", 'system-ui', 'sans-serif'],
        body: ["'JetBrains Mono', monospace", 'system-ui', 'sans-serif'],
        mono: ["'JetBrains Mono', monospace", 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '720px',
        wide: '1100px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#A8FFD4',
            '--tw-prose-headings': '#A8FFD4',
            '--tw-prose-links': '#3CFFAA',
            '--tw-prose-bold': '#3CFFAA',
            '--tw-prose-quotes': '#5FA88A',
            '--tw-prose-quote-borders': '#3CFFAA',
            '--tw-prose-code': '#3CFFAA',
            '--tw-prose-borders': '#0A2A20',
            maxWidth: '720px',
            fontSize: '1.05rem',
            lineHeight: '1.85',
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              letterSpacing: '-0.01em',
            },
            h2: {
              borderBottom: '1px solid #0A2A20',
              paddingBottom: '0.5rem',
              marginTop: '3rem',
            },
            blockquote: {
              background: '#021A14',
              borderRadius: '0 8px 8px 0',
              padding: '0.8rem 1.2rem',
              fontStyle: 'italic',
            },
            img: {
              borderRadius: '12px',
              boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
              margin: '2rem auto',
            },
            code: {
              background: '#021A14',
              padding: '0.15rem 0.45rem',
              borderRadius: '4px',
              border: '1px solid #0A2A20',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
