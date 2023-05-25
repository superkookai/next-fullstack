import Providers from "@/components/Providers"
import DLayout from "./components/DLayout"


export const metadata = {
  title: 'Dashboard',
  description: 'This is the dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <DLayout>
            {children}
          </DLayout>
        </Providers>
      </body>
    </html>
  )
}