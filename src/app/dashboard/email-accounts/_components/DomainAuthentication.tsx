import { Info, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DomainAuthentication = () => {
  const protocols = [
    {
      name: "SPF",
      status: "PASS",
      description:
        "SPF (Sender Policy Framework): Validates that incoming mail from a domain comes from an IP address authorized by that domain’s administrators",
    },
    {
      name: "DMARC",
      status: "PASS",
      description:
        "DMARC (Domain-based Message Authentication, Reporting, and Conformance): Builds on SPF and DKIM to specify how receivers should handle emails that fail authentication checks, and provides reports on email delivery status",
    },
    {
      name: "DKIM",
      status: "PASS",
      description:
        "DKIM (DomainKeys Identified Mail) is an email authentication method designed to detect forged sender addresses in emails.",
    },
    {
      name: "MX",
      status: "PASS",
      description:
        "MX (Mail Exchange) records are a type of DNS (Domain Name System) record used to specify the mail servers responsible for receiving email on behalf of a domain.",
    },
  ];

  return (
    <div className="w-full bg-gray-100 mb-6 rounded-xl">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold text-slate-800">
            Domain Authentication
          </CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <RefreshCw className="h-5 w-5 text-purple-600 cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Refresh status</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-sm text-slate-600">
          How likely are your emails to get accepted?
        </p>
      </CardHeader>
      <div className="p-6">
        <div className="flex flex-wrap">
          {protocols.map((protocol, index) => (
            <div
              key={protocol.name}
              className={`flex-1 min-w-32 ${index < protocols.length - 1 ? "border-r border-gray-200 pr-2" : ""}`}
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center mb-2 gap-2">
                  <span className="font-semibold text-slate-800">
                    {protocol.name}
                  </span>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info color="#475569" strokeWidth={1} />
                    </TooltipTrigger>
                    <TooltipContent className="w-56">
                      <p>{protocol.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Button variant="success" size="sm">
                  {protocol.status}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomainAuthentication;
