import "../src/index.css";
import Navbar from "../src/Navbar";
import Footer from "../src/footer/footer";
import ScrollToTop from "../src/ScrollToTop";

export const metadata = {
  metadataBase: new URL("https://climeto.com"),
  title: {
    default: "Climeto Sustainable Services",
    template: "%s | Climeto",
  },
  description: "Climeto Sustainable Services",
  icons: {
    icon: "/climetotitle.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}



