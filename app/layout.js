import "../src/index.css";
import Navbar from "../src/Navbar";
import Footer from "../src/footer/footer";
import ScrollToTop from "../src/ScrollToTop";
import JsonLd from "../src/components/JsonLd";
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from "../src/lib/schema";

export const metadata = {
  metadataBase: new URL("https://climeto.com"),
  title: {
    default: "Climeto Sustainable Services",
    template: "%s | Climeto",
  },
  description: "Climeto Sustainable Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={ORGANIZATION_SCHEMA} />
        <JsonLd data={WEBSITE_SCHEMA} />
      </head>
      <body>
        <Navbar />
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}



