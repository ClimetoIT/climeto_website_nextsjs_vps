"use client";

import EPRBatteryPage from "../../src/Services/EPR/EPRbattery.jsx";
import JsonLd from "../../src/components/JsonLd";
import { SERVICE_SCHEMAS } from "../../src/lib/schema";

export default function EPRBattery() {
  return (
    <>
      <JsonLd data={SERVICE_SCHEMAS.eprBattery.service} />
      <JsonLd data={SERVICE_SCHEMAS.eprBattery.faq} />
      <EPRBatteryPage />
    </>
  );
}


