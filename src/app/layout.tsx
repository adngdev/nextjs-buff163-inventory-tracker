import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';

import './globals.css';

import Navbar from '@/components/Navbar';

import ReactQueryProvider from '@/providers/ReactQueryProvider';

const PoppinsFont = Poppins({
    weight: ['300']
});

export const metadata: Metadata = {
  title: 'Buff Inventory Tracker'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${PoppinsFont} antialiased`}>
                <SessionProvider>
                    <ReactQueryProvider>
                        <div className={`relative`}>
                            <Navbar />
                            <div className={`pt-10`}>
                                {children}
                            </div>
                        </div>
                    </ReactQueryProvider>
                </SessionProvider>
            </body>
        </html>
  );
}
