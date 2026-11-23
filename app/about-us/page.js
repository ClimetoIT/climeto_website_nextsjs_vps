"use client";

import AboutUs from "../../src/AboutUs/AboutUs.jsx";
import JsonLd from "../../src/components/JsonLd";
import { ABOUT_PAGE_SCHEMA } from "../../src/lib/schema";

export default function AboutPage() {
  return (
    <>
      <JsonLd data={ABOUT_PAGE_SCHEMA} />
      <AboutUs />
    </>
  );
}


