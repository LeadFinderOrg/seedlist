"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import BulkEmailAddition from "./_components/BulkEmailAddition";
import EmailSetup from "./_components/EmailSetup";

export default function AddNewEmailAccounts() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/dashboard/email-accounts");
  };

  return (
    <div className="p-6">
      <Button variant="outline" size="lg" onClick={handleBack}>
        <IoIosArrowBack className="text-xl" />
        Back
      </Button>
      <h1 className="font-semibold text-xl mt-6"> Add Email Account</h1>

      <p className="font-normal text-base mt-2">
        Add your email account to begin your campaign
      </p>

      <BulkEmailAddition />

      <EmailSetup />
    </div>
  );
}
