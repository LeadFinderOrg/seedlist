import { Button } from "@/components/ui/button"
import {
    DialogClose,
    DialogContent,
    DialogTitle
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Video } from "lucide-react"

interface AppPasswordModalProps {
    onSuccess: () => void;
}

const AppPasswordModal: React.FC<AppPasswordModalProps> = ({ onSuccess }) => {

    return (
        <DialogContent className="max-w-xl">
            <DialogTitle className="text-xl font-medium">Add new sender email</DialogTitle>

            <h3 className="text-base font-normal mt-2">Google OAuth (one click login)</h3>
            <p className="text-sm text-slate-800 ">
                These setup steps are a one-time requirement for your Google Workspace administrator
            </p>
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

                <Button variant="primary" onClick={onSuccess}>
                    Connect
                </Button>
            </div>

        </DialogContent>
    )
}

export default AppPasswordModal
