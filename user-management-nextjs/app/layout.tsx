import "./globals.css";

export const metadata = {
  title: "User Management",
  description: "A clean user management app with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='container'>{children}</div>
      </body>
    </html>
  );
}
