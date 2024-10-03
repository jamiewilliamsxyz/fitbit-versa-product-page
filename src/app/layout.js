import "./globals.css";

export const metadata = {
  title: "Fitbit Versa 4",
  description: "FitBit Landing Page Front-end Website Project by Jamie Williams",
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
