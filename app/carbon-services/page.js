"use client";

import CarbonTradingPlatform from "../../src/Services/Credits/greenCredits.jsx";
import JsonLd from "../../src/components/JsonLd";
import { SERVICE_SCHEMAS } from "../../src/lib/schema";

export default function GreenCreditsPage() {
  return (
    <>
      <JsonLd data={SERVICE_SCHEMAS.carbonServices.service} />
      <JsonLd data={SERVICE_SCHEMAS.carbonServices.faq} />
      <CarbonTradingPlatform />
    </>
  );
}


