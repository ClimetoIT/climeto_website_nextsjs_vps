"use client";

import Carbon from "../../src/Services/carbon.jsx";
import JsonLd from "../../src/components/JsonLd";
import { SERVICE_SCHEMAS } from "../../src/lib/schema";

export default function CarbonPage() {
  return (
    <>
      <JsonLd data={SERVICE_SCHEMAS.carbonOffset.service} />
      <Carbon />
    </>
  );
}


