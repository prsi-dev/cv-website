import { Header } from '@/components/ui/header';
export default function CVLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header />
      {children}
      <footer className='py-6 md:px-8 md:py-0'>
        <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
          <p className='text-center text-sm leading-loose  md:text-left'>
            Built by Pedro Rodríguez. The source code is available on GitHub.
          </p>
        </div>
      </footer>
    </div>
  );
}
