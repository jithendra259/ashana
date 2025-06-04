import { Navigation } from '@/app/pricing/components/navigation';
import Footer from '@/app/pricing/components/footer/footer';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navigation />
      <main>
        {children}
      </main>
      <footer className="row-start-2 flex gap-[10px] flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </>
  )
}
