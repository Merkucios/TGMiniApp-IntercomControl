import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { MaxWidthWrapper } from '@/components/app';

const proximaSans = localFont({
  src: './fonts/ProximaNova.ttf',
  variable: '--font-proxima-sans',
  weight: '100 900',
});
const proximaMono = localFont({
  src: './fonts/ProximaNovaBold.otf',
  variable: '--font-proxima-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '«Инсис» | Управление умным домофоном ',
  description:
    'Инновационная система позволяет управлять с телефона умным домофоном',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${proximaSans.variable} ${proximaMono.variable} antialiased`}
      >
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </body>
    </html>
  );
}
