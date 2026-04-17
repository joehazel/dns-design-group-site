import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DNS Design Group',
  description: 'Warm, luxurious interior design website for DNS Design Group.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
