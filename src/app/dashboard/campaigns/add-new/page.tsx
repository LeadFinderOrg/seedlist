"use client";

import { useRouter } from "next/navigation";

import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

import CampaignCreation from "./_components/CampaignCreation";

export default function AddCampaignPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/dashboard/campaigns");
  };
  return (
    <div className="p-6">
      <Button variant="outline" size="lg" onClick={handleBack}>
        <ChevronLeft className="text-xl" />
        Back
      </Button>
      <CampaignCreation />
    </div>
  );
}
