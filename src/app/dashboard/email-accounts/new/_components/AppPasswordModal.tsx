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
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface AppPasswordModalProps {
    onSuccess: () => void;
}

const formFields = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    appPassword: z.string().min(1, 'App password is required'),
});

const AppPasswordModal: React.FC<AppPasswordModalProps> = ({ onSuccess }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const form = useForm({
        resolver: zodResolver(formFields),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            appPassword: '',
        }
    });

    const onSubmit = (values) => {
        console.log(values);
    };

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

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter first name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter last name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />



                    <FormField
                        control={form.control}
                        name="appPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>App Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter App password"
                                            {...field}
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-0 top-0 h-full px-3"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                                        </Button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />



                    <div className="flex justify-end gap-3 !mt-8">
                        <DialogClose asChild>
                            <Button variant="default" >
                                Cancel
                            </Button>
                        </DialogClose>

                        <Button variant="primary" type="submit">
                            Connect
                        </Button>
                    </div>
                </form>
            </Form>

        </DialogContent>
    )
}

export default AppPasswordModal