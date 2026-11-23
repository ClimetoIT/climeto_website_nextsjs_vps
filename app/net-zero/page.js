"use client";

import Netzero from "../../src/Services/Netzero.jsx";
import JsonLd from "../../src/components/JsonLd";
import { SERVICE_SCHEMAS } from "../../src/lib/schema";

export default function NetzeroPage() {
  return (
    <>
      <JsonLd data={SERVICE_SCHEMAS.netZero.service} />
      <Netzero />
    </>
  );
}


