import type { Metadata } from 'next';
import { Raleway, Lora } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/ui/header';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
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
      <body className={`${raleway.variable} ${lora.variable} antialiased max-h-screen`}>
        <ThemeProvider defaultTheme='light' attribute='class' enableSystem disableTransitionOnChange>
          <main className='flex-1 bg-background'>
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
