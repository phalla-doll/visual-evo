import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400'], // Only light and regular weights
});

export const metadata: Metadata = {
  title: 'VisualEvo Hero',
  description: 'AI Portrait Generation Hero Section',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans font-light bg-[#0f0f11] text-white antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
