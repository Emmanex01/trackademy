import ToastProvider from './_components/ToastProvider';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="cupcake">
      <body>
       <ToastProvider>
          {children}
      </ToastProvider>
      </body>
   </html>
  );
}
