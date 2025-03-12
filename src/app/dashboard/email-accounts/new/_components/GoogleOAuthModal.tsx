import { Button } from "@/components/ui/button"
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Copy, Video } from "lucide-react"
import GoogleIcon from "../../../../../common/GoogleIcon"

interface GoogleOAuthModalProps {
    onSuccess: () => void;
}

const GoogleOAuthModal: React.FC<GoogleOAuthModalProps> = ({ onSuccess }) => {

    return (
        <DialogContent className="max-w-xl">
            <DialogTitle className="text-xl font-medium">Add new sender email</DialogTitle>

            <h3 className="text-base font-normal mt-2">Google OAuth (one click login)</h3>
            <DialogDescription className="text-sm text-slate-800">
                These setup steps are a one-time requirement for your Google Workspace administrator
            </DialogDescription>
            <Separator />

            <ol className="space-y-4 text-sm">
                <li className="flex gap-2">
                    <span className="font-medium">1.</span>
                    <span>Go to your <a href="#" className="text-blue-500">Google Admin Console</a></span>
                </li>

                <li className="flex gap-2">
                    <span className="font-medium">2.</span>
                    <span>Click <span className="font-medium">&apos;Add App&apos;</span> and then select <span className="font-medium">&apos;OAuth App Name or Client ID&apos;</span></span>
                </li>

                <li className="flex gap-2">
                    <span className="font-medium">3.</span>
                    <span>Use the following client id to search for Seedlist:</span>
                </li>

                <div className="mt-2 border border-gray-300 rounded-md bg-gray-100">
                    <div className="flex items-center justify-between p-2">
                        <p className="text-gray-600">Client id here</p>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500">
                            <Copy />
                        </Button>
                    </div>
                </div>

                <li className="flex gap-2">
                    <span className="font-medium">4.</span>
                    <span>Select and approve Seedlist to access your Google Workspace</span>
                </li>
            </ol>

            <div className="flex items-center gap-2 mt-6">
                <Video className="h-5 w-5 text-blue-500" />
                <a href="#" className="text-blue-500 text-sm">See a tutorial video</a>
            </div>

            <div className="flex justify-end gap-3 mt-6">
                <DialogClose asChild>
                    <Button variant="default" >
                        Cancel
                    </Button>
                </DialogClose>

                <Button variant="outline" className="border-gray-200 hover:bg-gray-50 rounded-md px-4"
                    onClick={onSuccess}>

                    <div className="flex items-center gap-2">
                        <GoogleIcon />
                        Login with Email
                    </div>
                </Button>
            </div>

        </DialogContent>
    )
}

export default GoogleOAuthModal
