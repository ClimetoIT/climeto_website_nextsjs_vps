"use client";

import CarbonCreditsGuide from "../../src/Services/Credits/CarbonCredits.jsx";
import JsonLd from "../../src/components/JsonLd";
import { SERVICE_SCHEMAS } from "../../src/lib/schema";

export default function CarbonCreditsPage() {
  return (
    <>
      <JsonLd data={SERVICE_SCHEMAS.plasticServices.service} />
      <CarbonCreditsGuide />
    </>
  );
}


