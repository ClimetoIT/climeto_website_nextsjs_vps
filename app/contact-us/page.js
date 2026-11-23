"use client";

import ContactUs from "../../src/Contactus/Contactus.jsx";
import JsonLd from "../../src/components/JsonLd";
import { CONTACT_PAGE_SCHEMA } from "../../src/lib/schema";

export default function ContactPage() {
  return (
    <>
      <JsonLd data={CONTACT_PAGE_SCHEMA} />
      <ContactUs />
    </>
  );
}


