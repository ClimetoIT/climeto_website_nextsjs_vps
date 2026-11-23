"use client";

import EPREWastePage from "../../src/Services/EPR/EPRwaste.jsx";
import JsonLd from "../../src/components/JsonLd";
import { SERVICE_SCHEMAS } from "../../src/lib/schema";

export default function EPREWaste() {
  return (
    <>
      <JsonLd data={SERVICE_SCHEMAS.eprWaste.service} />
      <JsonLd data={SERVICE_SCHEMAS.eprWaste.faq} />
      <EPREWastePage />
    </>
  );
}


