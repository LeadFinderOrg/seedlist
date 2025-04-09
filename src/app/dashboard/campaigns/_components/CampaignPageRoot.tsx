"use client";

import { useRouter } from "next/navigation";

import { CirclePlus } from "lucide-react";

import { Button } from "@/components/ui/button";

import CampaignDataTable from "./CampaignTable";

const CampaignPageRoot = () => {
  const router = useRouter();

  const handleAddNew = () => {
    router.push("/dashboard/campaigns/add-new");
  };
  return (
    <div>
      <Button className="bg-customBlue hover:bg-customBlue/90"  size="lg" onClick={handleAddNew}>
        <CirclePlus className="text-xl" />
        Add new
      </Button>

      <CampaignDataTable />
    </div>
  );
};

export default CampaignPageRoot;
