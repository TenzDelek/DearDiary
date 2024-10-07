import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Navbar from '../components/Navbar';
import Head from 'next/head';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "DearDiary",
  description: "A Digital Diary for the future",
  icons: {
    icon: "/favicon/favicon/favicon/favicon.ico?v=4",
    apple: "/favicon/favicon/apple-touch-icon.png?v=4",
    shortcut: "/favicon/favicon/apple-touch-icon.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <Head>
        <title>DearDiary - A Digital Diary for the future</title>
        <meta name="description" content="A Digital Diary to capture and share your personal moments." />
        <meta name="keywords" content="digital diary, personal blog, online journal" />
        <meta property="og:title" content="DearDiary - A Digital Diary for the future" />
        <meta property="og:description" content="A Digital Diary to capture and share your personal moments." />
        <meta property="og:image" content="/path_to_your_image.jpg" />
        <meta property="og:url" content="https://dear-diary-black.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon/favicon/favicon.ico?v=4" />
        <link rel="apple-touch-icon" href="/favicon/favicon/apple-touch-icon.png?v=4" />
      </Head>
      <html lang="en" className="dark">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="flex items-center justify-between p-2  text-white">
            <div className="flex-grow flex justify-center">
              <Navbar />
            </div>
            <div className="flex items-center">
              <SignedOut>
                <SignInButton className="mr-4" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
