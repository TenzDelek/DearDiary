import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Navbar from '../components/Navbar';
import Footer from "@/components/Footer";

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
  title: {
    template: '%s | Dear Diary',
    default: 'Dear Diary',
  },
  description: "A Digital Diary for the future",
  icons: {
    icon: "/favicon/favicon/favicon/favicon.ico?v=4",
    apple: "/favicon/favicon/apple-touch-icon.png?v=4",
    shortcut: "/favicon/favicon/apple-touch-icon.png"
  },
  metadataBase: new URL('https://dear-diary-black.vercel.app/'),
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="navbar-header flex items-center justify-between p-2 text-white">
            <div className="flex-grow flex sm:justify-center">
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
          <footer><Footer/></footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
