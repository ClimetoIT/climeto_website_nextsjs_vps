import Home from "../src/Home/home";
import JsonLd from "../src/components/JsonLd";
import { HOME_FAQ_SCHEMA } from "../src/lib/schema";

export const metadata = {
  title: "Climeto Sustainable Services",
  description: "Climeto Sustainable Services",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={HOME_FAQ_SCHEMA} />
      <Home />
    </>
  );
}


