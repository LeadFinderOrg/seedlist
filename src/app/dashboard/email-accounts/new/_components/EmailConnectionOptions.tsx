"use client";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { AtSign, Key } from "lucide-react";
import AppPasswordModal from "./AppPasswordModal";
import GoogleIcon from "../../../../../common/GoogleIcon";
import GoogleOAuthModal from "./GoogleOAuthModal";
import OutlookIcon from "../../../../../common/OutlookIcon";
import { useState } from "react";
import OutlookModal from "./OutlookModal";
import ImapModal from "./ImapModal";

const EmailConnectionOptions = () => {
    const [googleDialogOpen, setGoogleDialogOpen] = useState<boolean>(false);
    const [appPasswordDialogOpen, setAppPasswordDialogOpen] = useState<boolean>(false);
    const [outlookDialogOpen, setOutlookDialogOpen] = useState<boolean>(false);
    const [imapDialogOpen, setImapDialogOpen] = useState<boolean>(false);

    return (
        <div className="w-full max-w-2xl">
            <h2 className="text-lg font-medium mb-2">Connect Google/Gmail Account</h2>

            <section className="grid grid-cols-2 gap-4 mb-3 border-b border-gray-300 pb-4">
                <div>
                    <Dialog open={googleDialogOpen} onOpenChange={setGoogleDialogOpen}>
                        <DialogTrigger asChild>
                            <div className="p-4 flex flex-col items-center justify-center cursor-pointer bg-white rounded-lg border border-gray-400">
                                <GoogleIcon />
                            </div>
                        </DialogTrigger>
                        <GoogleOAuthModal onSuccess={() => setGoogleDialogOpen(false)} />
                    </Dialog>

                    <p className="font-medium text-center text-base">OAuth</p>
                    <p className="text-sm text-gray-500 text-center">One Click Setup</p>
                </div>

                <div>
                    <Dialog open={appPasswordDialogOpen} onOpenChange={setAppPasswordDialogOpen}>
                        <DialogTrigger asChild>
                            <div className="p-4 flex flex-col items-center justify-center cursor-pointer bg-white rounded-lg border border-gray-400">
                                <Key />
                            </div>
                        </DialogTrigger>

                        <AppPasswordModal
                            open={appPasswordDialogOpen}
                            onSuccess={() => setAppPasswordDialogOpen(false)} />

                    </Dialog>
                    <p className="font-medium text-center text-base">App Password</p>
                    <p className="text-sm text-gray-500 text-center">SMTP Setup</p>
                </div>
            </section>

            <h2 className="text-lg font-medium mb-2">Other Email Provider</h2>

            <section className="grid grid-cols-2 gap-4">
                <div>
                    <Dialog open={outlookDialogOpen} onOpenChange={setOutlookDialogOpen}>
                        <DialogTrigger asChild>
                            <div className="p-4 flex flex-col items-center justify-center cursor-pointer bg-white rounded-lg border border-gray-400">
                                <OutlookIcon />
                            </div>
                        </DialogTrigger>
                        <OutlookModal onSuccess={() => setOutlookDialogOpen(false)} />
                    </Dialog>
                    <p className="font-medium text-center text-base">Outlook</p>
                    <p className="text-sm text-gray-500 text-center">One Click Setup</p>
                </div>

                <div>
                    <Dialog open={imapDialogOpen} onOpenChange={setImapDialogOpen}>
                        <DialogTrigger asChild>
                            <div className="p-4 flex flex-col items-center justify-center cursor-pointer bg-white rounded-lg border border-gray-400">
                                <AtSign />
                            </div>
                        </DialogTrigger>

                        <ImapModal
                            open={imapDialogOpen}
                            onSuccess={() => setImapDialogOpen(false)} />

                    </Dialog>
                    <p className="font-medium text-center text-base">IMAP/SMTP</p>
                    <p className="text-sm text-gray-500 text-center">Any Provider</p>
                </div>
            </section>
        </div>
    );
};

export default EmailConnectionOptions;