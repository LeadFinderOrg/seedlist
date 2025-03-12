"use client";

import { Button } from "@/components/ui/button";
import { CirclePlus, Download } from "lucide-react";
import { useRouter } from "next/navigation";

const EmailAccountsRoot = () => {
  const router = useRouter();

  const handleAddNew = () => {
    router.push("/dashboard/email-accounts/new");
  };
  return (
    <div>
      <section className="flex justify-between items-center">
        <Button variant="primary" size="lg" onClick={handleAddNew}>
          <CirclePlus className="text-xl" />
          Add new
        </Button>

        <Button variant="outline" size="lg">
          <Download className="text-xl" />
          Export
        </Button>
      </section>
    </div>
  );
};

export default EmailAccountsRoot;
