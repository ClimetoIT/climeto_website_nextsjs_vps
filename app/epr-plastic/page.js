"use client";

import EPRPlasticPage from "../../src/Services/EPR/EPRplastic.jsx";
import JsonLd from "../../src/components/JsonLd";
import { SERVICE_SCHEMAS } from "../../src/lib/schema";

export default function EPRPlastic() {
  return (
    <>
      <JsonLd data={SERVICE_SCHEMAS.eprPlastic.service} />
      <JsonLd data={SERVICE_SCHEMAS.eprPlastic.faq} />
      <EPRPlasticPage />
    </>
  );
}


