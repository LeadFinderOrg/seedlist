import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AtIcon from "./AtIcon";
import GoogleIcon from "./GoogleIcon";
import KeyIcon from "./KeyIcon";
import OutlookIcon from "./OutlookIcon";
import GoogleOAuthModal from "./GoogleOAuthModal";

const EmailConnectionOptions = () => {
    return (
        <div className="w-full max-w-2xl">
            <h2 className="text-lg font-medium mb-2">Connect Google/Gmail Account</h2>

            <section className="grid grid-cols-2 gap-4 mb-3 border-b border-gray-300 pb-4">
                <div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="p-4 flex flex-col items-center justify-center cursor-pointer bg-white rounded-lg border border-gray-400">
                                <GoogleIcon />
                            </div>
                        </DialogTrigger>
                        <GoogleOAuthModal />
                    </Dialog>

                    <p className="font-medium text-center text-base">OAuth</p>
                    <p className="text-sm text-gray-500 text-center">One Click Setup</p>
                </div>

                <div>
                    <div className="p-4 flex flex-col items-center justify-center cursor-pointer bg-white rounded-lg border border-gray-400">
                        <KeyIcon />
                    </div>
                    <p className="font-medium text-center text-base">App Password</p>
                    <p className="text-sm text-gray-500 text-center">SMTP Setup</p>
                </div>
            </section>

            <h2 className="text-lg font-medium mb-2">Other Email Provider</h2>

            <section className="grid grid-cols-2 gap-4">
                <div>
                    <div className="p-4 flex flex-col items-center justify-center cursor-pointer bg-white rounded-lg border border-gray-400">
                        <OutlookIcon />
                    </div>
                    <p className="font-medium text-center text-base">Outlook</p>
                    <p className="text-sm text-gray-500 text-center">One Click Setup</p>
                </div>

                <div>
                    <div className="p-4 flex flex-col items-center justify-center cursor-pointer bg-white rounded-lg border border-gray-400">
                        <AtIcon />
                    </div>
                    <p className="font-medium text-center text-base">IMAP/SMTP</p>
                    <p className="text-sm text-gray-500 text-center">Any Provider</p>
                </div>
            </section>
        </div>
    );
};

export default EmailConnectionOptions;