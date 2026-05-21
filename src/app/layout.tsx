import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O Desenvolvedor - Portfólio',
  description: 'Portfólio em estilo de jornal impresso antigo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}