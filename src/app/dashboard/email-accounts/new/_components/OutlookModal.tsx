import { Button } from "@/components/ui/button";
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle
} from "@/components/ui/dialog";
import { ChevronRight, Video } from "lucide-react";

interface OutlookModalProps {
    onSuccess: () => void;
}

const OutlookModal: React.FC<OutlookModalProps> = ({ onSuccess }) => {

    return (
        <DialogContent className="max-w-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <DialogTitle className="text-xl font-medium">Add new sender email</DialogTitle>

            <h3 className="text-base font-normal mt-2">Connect your Microsoft Account (Office 365 / Outlook)</h3>
            <DialogDescription className="text-sm text-slate-800">
                First, let’s enable SMTP access for your Microsoft account
            </DialogDescription>

            <div className="mt-2 bg-gray-100 p-4 rounded-lg">
                <h3 className="text-base font-normal mb-4">Microsoft accounts purchased directly from Microsoft</h3>
                <ol className="space-y-3 text-sm">
                    <li className="flex gap-2">
                        <span className="font-medium">1.</span>
                        <span>On your computer, log in to your <a href="#" className="text-blue-500">Microsoft Admin center</a></span>
                    </li>

                    <li className="flex gap-2">
                        <span className="font-medium">2.</span>
                        <span>Open <a href="#" className="text-blue-500">Active Users</a></span>
                    </li>

                    <li className="flex gap-2">
                        <span className="font-medium">3.</span>
                        <span>In the side window, click on <span className="font-medium">&apos;Mail&apos;</span> tab and then on <span className="font-medium">&apos;Manage email apps&apos;</span></span>
                    </li>


                    <li className="flex gap-2">
                        <span className="font-medium">4.</span>
                        <span>Check the <span className="font-medium">&apos;Authenticated SMTP&apos;</span> and make sure <span className="font-medium">&apos;IMAP&apos;</span> is checked as well</span>
                    </li>
                </ol>

                <div className="flex items-center justify-between gap-2 mt-4">
                    <div className="flex items-center gap-2">
                        <Video className="h-5 w-5 text-blue-500" />
                        <a href="#" className="text-blue-500 text-sm">See a tutorial video</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <a href="#" className="text-blue-500 text-sm">Show me how</a>
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                    </div>
                </div>
            </div>


            <div className="mt-2 bg-gray-100 p-4 rounded-lg">
                <h3 className="text-base font-normal mb-4">Microsoft accounts purchased directly from Microsoft</h3>
                <ol className="space-y-3 text-sm">
                    <li className="flex gap-2">
                        <span className="font-medium">1.</span>
                        <span>On your computer, log in to your <a href="#" className="text-blue-500">GoDaddy</a> account</span>
                    </li>

                    <li className="flex gap-2">
                        <span className="font-medium">2.</span>
                        <span>Go to <span className="font-medium">&apos;My Products&apos;</span> page</span>
                    </li>

                    <li className="flex gap-2">
                        <span className="font-medium">3.</span>
                        <span>Scroll down and go to <span className="font-medium">&apos;Email and Office&apos;</span> section</span>
                    </li>


                    <li className="flex gap-2">
                        <span className="font-medium">4.</span>
                        <span>Click <span className="font-medium">&apos;Manage All&apos;</span></span>
                    </li>

                    <li className="flex gap-2">
                        <span className="font-medium">4.</span>
                        <span>Find the user you want to enable SMTP for</span>
                    </li>
                </ol>

                <div className="flex items-center justify-between gap-2 mt-4">
                    <div className="flex items-center gap-2">
                        <Video className="h-5 w-5 text-blue-500" />
                        <a href="#" className="text-blue-500 text-sm">See a tutorial video</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <a href="#" className="text-blue-500 text-sm">Show me how</a>
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
                <DialogClose asChild>
                    <Button variant="default" >
                        Cancel
                    </Button>
                </DialogClose>

                <Button className="bg-customBlue hover:bg-customBlue/90" onClick={onSuccess}>
                    Yes, SMTP has been enabled <ChevronRight />
                </Button>
            </div>

        </DialogContent>
    )
}

export default OutlookModal
