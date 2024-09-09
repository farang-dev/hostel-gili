import { Providers } from "./providers";

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
