"use client";

import PlasticWasteLanding from "../../src/Services/Plastic.jsx";
import JsonLd from "../../src/components/JsonLd";
import { SERVICE_SCHEMAS } from "../../src/lib/schema";

export default function PlasticStewardshipPage() {
  return (
    <>
      <JsonLd data={SERVICE_SCHEMAS.plasticStewardship.service} />
      <JsonLd data={SERVICE_SCHEMAS.plasticStewardship.faq} />
      <PlasticWasteLanding />
    </>
  );
}
