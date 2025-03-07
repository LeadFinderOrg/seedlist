"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CgExport } from "react-icons/cg";
import { FiPlusCircle } from "react-icons/fi";

const EmailAccountsRoot = () => {
  const router = useRouter();

  const handleAddNew = () => {
    router.push("/dashboard/email-accounts/new");
  };
  return (
    <div>
      <section className="flex justify-between items-center">
        <Button variant="primary" size="lg" onClick={handleAddNew}>
          <FiPlusCircle className="text-xl" />
          Add new
        </Button>

        <Button variant="outline" size="lg">
          <CgExport className="text-xl" />
          Export
        </Button>
      </section>
    </div>
  );
};

export default EmailAccountsRoot;
