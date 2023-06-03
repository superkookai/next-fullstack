import Providers from "@/components/Providers"
import DLayout from "./components/DLayout"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"


export const metadata = {
  title: 'Dashboard',
  description: 'This is the dashboard',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <Providers>
          <DLayout session={session}>
            {children}
          </DLayout>
        </Providers>
      </body>
    </html>
  )
}