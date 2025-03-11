import { Button } from "@/components/ui/button";
import {
    DialogClose,
    DialogContent,
    DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Video } from "lucide-react";
import { useState } from "react";

interface AppPasswordModalProps {
    onSuccess: () => void;
}

const AppPasswordModal: React.FC<AppPasswordModalProps> = ({ onSuccess }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <DialogContent className="max-w-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
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

            <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                    <label className="block text-sm font-medium">First Name</label>
                    <Input
                        type="text"
                        placeholder="Enter first name"
                        className="pl-4 mt-1"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Last Name</label>
                    <Input
                        type="text"
                        placeholder="Enter last name"
                        className="pl-4 mt-1"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            </div>

            {/* Email Input */}
            <div>
                <label className="block text-sm font-medium">Email</label>
                <Input
                    type="email"
                    placeholder="Enter email"
                    className="pl-4 mt-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>


            {/* Password Input */}
            <div>
                <label className="block text-sm font-medium">App Password</label>
                <div className="relative flex items-center mt-1">
                    <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter app password"
                        className="pl-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 text-slate-800"
                    >
                        {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                    </button>
                </div>
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
