import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

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
    apple:"/favicon/favicon/apple-touch-icon.png?v=4",
    shortcut:"/favicon/favicon/apple-touch-icon.png"
  },
};

export default function RootLayout({ children }) {
  return (
   <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </header>
          {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
