"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import CampaignsTab from "./_components/CampaignsTab";

export default function CampaignDetailsPage() {
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
      <CampaignsTab />
    </div>
  )
}
