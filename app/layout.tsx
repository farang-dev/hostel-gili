import Header from './components/Header';
import './styles/HostelHomepage.css';

export const metadata = {
  title: 'Hostel Gili Trawangan',
  description: 'Your beachfront paradise on Gili Trawangan Island',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="hostel-homepage">
        <Header />
        <main>{children}</main>
        <footer className="site-footer">
          <p>&copy; 2023 Hostel Gili Trawangan. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
