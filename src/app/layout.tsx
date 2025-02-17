import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/ui/header';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Pedro Rodríguez Suárez-Infiesta - Software Developer',
  description: 'Full-stack developer with a focus on TypeScript, React, and Node.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme='light' attribute='class' enableSystem disableTransitionOnChange>
          <Header />
          <main className='flex-1 bg-background'>{children}</main>
          <footer className='py-6 md:px-8 md:py-0'>
            <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
              <p className='text-center text-sm leading-loose  md:text-left'>
                Built by Pedro Rodríguez. The source code is available on GitHub.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
