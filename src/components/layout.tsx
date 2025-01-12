import { Mail } from 'lucide-react';
import { ThemeToggle } from './ui/theme-toogle';
import { Button } from '@/components/ui/button';
import DownloadPDFButton from './ui/download-pdf-button';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='sticky top-0 z-40 w-full border-b bg-background/10 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='flex h-14 items-center justify-end sm:justify-between flex-grow w-full px-6'>
          <div className='mr-4 hidden md:flex'>
            <nav className='flex items-center space-x-6 text-sm font-medium'>
              <a className='transition-colors hover:text-foreground text-foreground/60' href='#about'>
                About
              </a>
              <a className='transition-colors hover:text-foreground text-foreground/60' href='#skills'>
                Skills
              </a>
              <a className='transition-colors hover:text-foreground text-foreground/60' href='#experience'>
                Experience
              </a>
            </nav>
          </div>
          <div className='flex items-center space-x-2 '>
            <Button asChild variant='ghost' size='icon'>
              <a href='https://www.linkedin.com/in/pedro-rodriguez-su%C3%A1rez-infiesta-099b4966' aria-label='LinkedIn'>
                <LinkedInLogoIcon className='h-5 w-5' />
              </a>
            </Button>
            <Button asChild variant='ghost' size='icon'>
              <a href='https://github.com/prsi-dev' aria-label='Github'>
                <GitHubLogoIcon className='h-5 w-5' />
              </a>
            </Button>
            <Button asChild variant='ghost' size='icon'>
              <a href='mailto:prsi.developer@gmail.com' aria-label='Send email'>
                <Mail className='h-5 w-5' />
              </a>
            </Button>
            <DownloadPDFButton />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className='flex-1 bg-background'>{children}</main>
      <footer className='py-6 md:px-8 md:py-0'>
        <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
          <p className='text-center text-sm leading-loose   md:text-left'>
            Built by Pedro Rodríguez. The source code is available on GitHub.
          </p>
        </div>
      </footer>
    </div>
  );
}
