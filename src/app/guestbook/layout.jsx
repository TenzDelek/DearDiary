// /app/layout.jsx

export const metadata = {
  title: 'Your App Title',
  description: 'Your app description.',
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
