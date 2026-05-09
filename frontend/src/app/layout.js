import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'VorcIT — Code Strong. Build Stronger.',
  description: 'VorcIT is a premium digital services agency specializing in web development, AI solutions, UI/UX design, and performance marketing.',
  keywords: 'web development, app development, AI chatbots, UI/UX design, SEO, digital marketing',
  openGraph: {
    title: 'VorcIT — Code Strong. Build Stronger.',
    description: 'Premium digital services agency for web, AI, design & marketing.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} ${inter.variable}`}>
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}

function ThemeScript() {
  const script = `
    (function() {
      try {
        var theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
      } catch (e) {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
