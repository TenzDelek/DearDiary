// /app/layout.jsx

export const metadata = {
  title: 'Guestbook',
  description: 'Sign a message into our guestbook!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
