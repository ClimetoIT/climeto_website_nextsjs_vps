"use client";

import EPRTirePage from "../../src/Services/EPR/EPRtyre.jsx";
import JsonLd from "../../src/components/JsonLd";
import { SERVICE_SCHEMAS } from "../../src/lib/schema";

export default function EPRTyre() {
  return (
    <>
      <JsonLd data={SERVICE_SCHEMAS.eprTyre.service} />
      <JsonLd data={SERVICE_SCHEMAS.eprTyre.faq} />
      <EPRTirePage />
    </>
  );
}


