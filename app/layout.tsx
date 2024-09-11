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
        <div className="min-h-screen flex flex-col">
          <header className="bg-gray-800 text-white py-4">
            {/* Add header content here */}
          </header>

          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          <footer className="bg-gray-800 text-white py-4 mt-auto">
            {/* Add footer content here */}
          </footer>
        </div>
      </body>
    </html>
  )
}
