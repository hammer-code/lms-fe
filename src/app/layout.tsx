import { LayoutContainer } from '@/components/layout/LayoutContainer';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import TanstackProvider from '@/components/provider/TanstackProvider';
import { HydrateProvider } from '@/components/provider/HydrateProvider';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Hmc Learn'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <LayoutContainer>
          <TanstackProvider>{children}</TanstackProvider>
        </LayoutContainer>
        <Toaster />
      </body>
    </html>
  );
}
