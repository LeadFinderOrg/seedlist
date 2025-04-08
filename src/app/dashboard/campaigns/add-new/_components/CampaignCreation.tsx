import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const CampaignCreation = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-12">
      <Card className="bg-gray-100 border-0 shadow-sm rounded-xl p-6">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-4xl font-bold text-slate-800 mb-2">
            Let&apos;s create a new campaign
          </CardTitle>
          <p className="text-slate-600 text-xl font-semibold">
            What would you like to name it?
          </p>
        </CardHeader>
        <CardContent className="mt-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="campaignName"
                className="block text-sm font-medium text-slate-800 mb-1"
              >
                Campaign Name
              </label>
              <Input
                id="campaignName"
                placeholder="Enter campaign name"
                className="w-full h-14 bg-white"
              />
            </div>

            <div className="flex justify-center pt-4">
              <Button className="bg-[#2184C6] hover:bg-[#2184C6]/90" size="lg">
                Create Campaign
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CampaignCreation;
