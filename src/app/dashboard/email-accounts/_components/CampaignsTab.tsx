import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronRight } from 'lucide-react';

export default function CampaignsTab() {
    return (
        <div>
            <h3 className="text-slate-600 font-medium mt-4">See campaigns where email is used</h3>
            <div className="w-full mx-auto space-y-6 mt-4">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="campaign-1" className="rounded-lg bg-slate-50 overflow-hidden">
                        <div className="flex items-center px-4 py-3">
                            <div className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full mr-4">
                                Active
                            </div>
                            <div className="flex-1">
                                <AccordionTrigger className="flex justify-between w-full hover:no-underline">
                                    <span className="text-base font-medium text-slate-800">Campaign Name</span>
                                    <ChevronRight className="h-5 w-5 shrink-0 text-slate-800 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                                </AccordionTrigger>
                            </div>
                        </div>
                        <AccordionContent className="px-4 py-3">
                            <div className="text-sm text-gray-600">
                                Campaign details go here...
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="campaign-2" className="rounded-lg bg-slate-50 overflow-hidden mt-4">
                        <div className="flex items-center px-4 py-3">
                            <div className="bg-gray-400 text-white text-xs font-medium px-3 py-1 rounded-full mr-4">
                                Paused
                            </div>
                            <div className="flex-1">
                                <AccordionTrigger className="flex justify-between w-full hover:no-underline">
                                    <span className="text-base font-medium text-slate-800">Campaign Name 2</span>
                                    <ChevronRight className="h-5 w-5 shrink-0 text-slate-800 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                                </AccordionTrigger>
                            </div>
                        </div>
                        <AccordionContent className="px-4 py-3">
                            <div className="text-sm text-gray-600">
                                Campaign details go here...
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
