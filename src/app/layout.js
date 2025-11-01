import Footer from "@/components/Footer";
import "./globals.css";

// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["200", "400", "600, 800"], // optional
// });

export const metadata = {
  title: "Audiophile e-commerce",
  description: "Audiophile e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
