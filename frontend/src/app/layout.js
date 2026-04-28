import './globals.css';

import { Inter, Syne } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const syne = Syne({ subsets: ['latin'], variable: '--font-heading' });

export const metadata = {
  title: 'NexusDigital — We Build Digital Experiences That Scale',
  description: 'NexusDigital is a premium digital services agency specializing in web development, AI solutions, UI/UX design, and performance marketing.',
  keywords: 'web development, app development, AI chatbots, UI/UX design, SEO, digital marketing',
  openGraph: {
    title: 'NexusDigital — We Build Digital Experiences That Scale',
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
      <body className={`${inter.className} ${syne.variable} ${inter.variable}`}>
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
        var theme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', theme);
      } catch (e) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
