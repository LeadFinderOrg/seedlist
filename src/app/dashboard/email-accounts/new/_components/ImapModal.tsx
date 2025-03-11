import { Button } from "@/components/ui/button";
import {
    DialogClose,
    DialogContent,
    DialogTitle
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

interface ImapModalProps {
    onSuccess: () => void;
}

const ImapModal: React.FC<ImapModalProps> = ({ onSuccess }) => {

    return (
        <DialogContent className="max-w-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <DialogTitle className="text-xl font-medium">Add new sender email</DialogTitle>

            <h3 className="text-base font-normal mt-2">Connect your custom account (Configure IMAP + SMTP)</h3>

            <ol className="space-y-4 text-sm">
                <li className="flex gap-2">
                    <span className="font-medium">1.</span>
                    <span>Ensure IMAP is enabled through your provider settings</span>
                </li>

                <li className="flex gap-2">
                    <span className="font-medium">2.</span>
                    <span>Ensure SMTP is enabled through your provider settings</span>
                </li>

                <li className="flex gap-2">
                    <span className="font-medium">3.</span>
                    <span>Use your regular email provider account password</span>
                </li>
            </ol>

            <Separator />

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

export default ImapModal
