import React, { useState } from "react";

import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  StepAnalyticsData,
  stepAnalyticsData,
} from "@/utils/constants/step-analyticsData";

const StepAnalytics: React.FC = () => {
  const [steps, setSteps] = useState<StepAnalyticsData[]>(stepAnalyticsData);

  const toggleVariant = (stepId: string, variantId: string) => {
    setSteps((prevSteps) =>
      prevSteps.map((step) => {
        if (step.id === stepId && step.variants) {
          return {
            ...step,
            variants: step.variants.map((variant) =>
              variant.id === variantId
                ? { ...variant, active: !variant.active }
                : variant
            ),
          };
        }
        return step;
      })
    );
  };

  return (
    <div className="w-full mt-6">
      <Table>
        <TableHeader className="bg-slate-100">
          <TableRow>
            <TableHead className="font-semibold text-slate-800">STEP</TableHead>
            <TableHead className="font-semibold text-slate-800">SENT</TableHead>
            <TableHead className="font-semibold text-slate-800">
              OPENED
            </TableHead>
            <TableHead className="font-semibold text-slate-800">
              REPLIED
            </TableHead>
            <TableHead className="font-semibold text-slate-800">
              CLICKED
            </TableHead>
            <TableHead className="font-semibold text-slate-800">
              OPPORTUNITIES
            </TableHead>
          </TableRow>
        </TableHeader>
        {steps.map((step) => (
          <tbody key={step.id}>
            {/* Main Step Row */}
            <TableRow className="border-b border-gray-200">
              <TableCell className="font-medium">{step.label}</TableCell>
              <TableCell className="font-medium">{step.sent}</TableCell>
              <TableCell>{step.opened}</TableCell>
              <TableCell>
                <div className="flex">
                  <span className="pr-2 border-r border-gray-300 font-medium">
                    {step.replied}
                  </span>
                  <span className="pl-2 text-gray-500">{step.replyRate}</span>
                </div>
              </TableCell>
              <TableCell className="text-gray-500">{step.clicked}</TableCell>
              <TableCell>{step.opportunities}</TableCell>
            </TableRow>

            {/* Variant Rows */}
            {step.variants?.map((variant) => (
              <TableRow key={variant.id} className="border-b border-gray-200">
                <TableCell className="pl-10">
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={variant.active}
                      onCheckedChange={() => toggleVariant(step.id, variant.id)}
                      className="data-[state=checked]:bg-slate-800"
                    />
                    <span className="text-sm font-medium">{variant.label}</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-500">{variant.sent}</TableCell>
                <TableCell className="text-gray-500">
                  {variant.opened}
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <span className="pr-2 border-r border-gray-300 text-slate-800">
                      {variant.replied}
                    </span>
                    <span className="pl-2 text-gray-500">
                      {variant.replyRate}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-500">
                  {variant.clicked}
                </TableCell>
                <TableCell className="text-gray-500">
                  {variant.opportunities}
                </TableCell>
              </TableRow>
            ))}

            {/* Extra Row for Step End Border */}
            <TableRow className="border-b border-slate-800">
              <TableCell colSpan={6} className="p-0" />
            </TableRow>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default StepAnalytics;
