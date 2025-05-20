import "./globals.css"; // Ensure global styles are imported
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Clover Technologies",
  description: "Colorado Technology Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
