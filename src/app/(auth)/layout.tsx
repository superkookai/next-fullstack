import Providers from "@/components/Providers";


export const metadata = {
  title: "Login Page",
  description: "This is the Login Page",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
