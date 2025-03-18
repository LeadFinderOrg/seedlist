"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddCampaign() {
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
      <h1 className="font-semibold text-xl mt-6"> Add New Campaigns</h1>

    </div>
  )
}