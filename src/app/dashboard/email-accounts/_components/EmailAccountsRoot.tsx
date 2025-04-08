"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { CirclePlus, Download } from "lucide-react";

import { Button } from "@/components/ui/button";

import EmailAccountTable from "./EmailAccountTable";
import TableDataFilter from "./TableDataFilter";

export interface EmailTableData {
  email: string;
  emailReceived: number;
  emailSent: number;
  emailsSent: string;
  healthScore: number;
  id: string;
  spam: number;
  startedOn: number;
  warmupEmails: number;
  warmupEnable: boolean;
}

const EmailAccountsRoot = () => {
  const router = useRouter();

  const [data, setData] = useState<EmailTableData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://67f2911dec56ec1a36d37dda.mockapi.io/api/emailList/emails"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddNew = () => {
    router.push("/dashboard/email-accounts/new");
  };
  return (
    <div>
      <section className="flex justify-between items-center">
        <Button className="bg-[#2184C6] hover:bg-[#2184C6]/90"  size="lg" onClick={handleAddNew}>
          <CirclePlus className="text-xl" />
          Add new
        </Button>

        <Button variant="outline" size="lg">
          <Download className="text-xl" />
          Export
        </Button>
      </section>

      <TableDataFilter />

      <EmailAccountTable data={data} loading={loading} />
    </div>
  );
};

export default EmailAccountsRoot;
