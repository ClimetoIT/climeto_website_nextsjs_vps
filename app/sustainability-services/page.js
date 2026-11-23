"use client";

import PlasticCreditsGuide from "../../src/Services/Credits/plasticCredits.jsx";
import JsonLd from "../../src/components/JsonLd";
import { SERVICE_SCHEMAS } from "../../src/lib/schema";

export default function PlasticCreditsPage() {
  return (
    <>
      <JsonLd data={SERVICE_SCHEMAS.sustainabilityServices.service} />
      <PlasticCreditsGuide />
    </>
  );
}


