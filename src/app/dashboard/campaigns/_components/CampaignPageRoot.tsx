"use client";

import { useRouter } from "next/navigation";

import { CirclePlus, Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export interface EmailTableData {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
}

const CampaignPageRoot = () => {
  const router = useRouter();

  const handleAddNew = () => {
    router.push("/dashboard/campaigns/new");
  };
  return (
    <div>
      <Button variant="primary" size="lg" onClick={handleAddNew}>
        <CirclePlus className="text-xl" />
        Add new
      </Button>
    </div>
  );
};

export default CampaignPageRoot;
