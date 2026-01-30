import Footer from '@/sections/Footer';

type PageShellProps = {
  children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
