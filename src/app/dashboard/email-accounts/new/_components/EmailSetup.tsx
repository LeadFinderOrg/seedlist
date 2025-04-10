import { CircleCheckBig } from "lucide-react";
import Image from "next/image";

const google = "/images/google.png";
const microsoftOffice = "/images/microsoftOffice.png";

export default function EmailSetup() {
  return (
    <div className="bg-gray-100 p-6 rounded-2xl mt-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-slate-800">
        Done-for-you Email Setup
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_3fr] gap-6 rounded-md">
        {/* Left */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 md:border-r md:border-b-0 border-b border-gray-300 md:pr-6 pb-6 md:pb-0">
          <div className="border rounded-xl p-6 flex flex-col items-center bg-white">
            <h3 className="font-light text-base mb-4">Google Workspace</h3>
            <Image
              src={google}
              alt="SeedList.ai Logo"
              width={100}
              height={100}
              className="p-3"
            />
            <p className="text-lg text-slate-800 mt-4">Mailboxes</p>
            <h3 className="text-sm text-slate-500 mt-1">
              starting at $4/month
            </h3>
          </div>

          <div className="border rounded-xl p-6 flex flex-col items-center bg-white">
            <h3 className="font-light text-base mb-4">Microsoft</h3>
            <Image
              src={microsoftOffice}
              alt="SeedList.ai Logo"
              width={90}
              height={100}
              className="p-3"
            />
            <p className="text-lg text-slate-800 mt-4">Office 365 / Outlook</p>
          </div>
        </section>

        {/* Right */}
        <section className="">
          <h4 className="font-semibold text-base mb-6 text-slate-800">
            Includes
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <section className="space-y-4 text-slate-600">
              <div className="flex items-center gap-2">
                <CircleCheckBig size={22} className="text-slate-400" />
                <h1>Automatic OAuth Setup</h1>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheckBig size={22} className="text-slate-400" />
                <h1>Automatic reconnects</h1>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheckBig size={22} className="text-slate-400" />
                <h1>US IPs only</h1>
              </div>
            </section>
            <section className="space-y-4 text-slate-600">
              <div className="flex items-center gap-2">
                <CircleCheckBig size={22} className="text-slate-400" />
                <h1>Connect unlimited domains</h1>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheckBig size={22} className="text-slate-400" />
                <h1>Email deliverability optimized</h1>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheckBig size={22} className="text-slate-400" />
                <h1>Starting at $4/month</h1>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
