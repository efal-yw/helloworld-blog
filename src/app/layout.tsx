
// src/app/layout.tsx
import React from "react";

import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'

import './globals.css'
import Navbar from './components/Navbar'

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'], 
  weight: ['400', '700'],
})


export const metadata: Metadata = {
  title: 'EfAlのブログ',
  description: '京都の大学に通う情報学科１回生のブログ。新鮮で奥の深い情報をお届けしていく',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
  <body className={notoSansJp.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
