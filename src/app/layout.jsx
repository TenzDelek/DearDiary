import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Navbar from '../components/Navbar';
import { ThemeProvider } from "@/context/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";


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
        <ThemeProvider>
          <header className="flex items-center justify-between p-2  text-white">
              <div className="flex-grow flex justify-center">
                <Navbar /> 
              </div>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <SignedOut>
                  <SignInButton className="mr-4" /> 
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </header>
            {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
