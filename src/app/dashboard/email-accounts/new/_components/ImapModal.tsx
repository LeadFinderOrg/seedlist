"use client"

import { Button } from "@/components/ui/button";
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { z } from "zod";

interface ImapModalProps {
    onSuccess: () => void;
    open: boolean;
}

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    smtpUsername: string;
    smtpPassword: string;
    smtpHost: string;
    smtpPort: string;
    imapUsername: string;
    imapPassword: string;
    imapHost: string;
    imapPort: string;
}

const formSchema = z.object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    smtpUsername: z.string().min(2, 'SMTP username is required'),
    smtpPassword: z.string().min(4, 'SMTP password is required'),
    smtpHost: z.string().min(1, 'SMTP host is required'),
    smtpPort: z.string().min(1, 'SMTP port is required'),
    imapUsername: z.string().min(2, 'IMAP username is required'),
    imapPassword: z.string().min(4, 'IMAP password is required'),
    imapHost: z.string().min(1, 'IMAP host is required'),
    imapPort: z.string().min(1, 'IMAP port is required'),
});

const ImapModal: React.FC<ImapModalProps> = ({ onSuccess, open }) => {

    const [showSmtpPassword, setShowSmtpPassword] = useState<boolean>(false);
    const [showImapPassword, setShowImapPassword] = useState<boolean>(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            smtpUsername: '',
            smtpPassword: '',
            smtpHost: '',
            smtpPort: '',
            imapUsername: '',
            imapPassword: '',
            imapHost: '',
            imapPort: '',
        },
    });


    useEffect(() => {
        if (!open) {
            form.reset();
            setShowSmtpPassword(false);
            setShowImapPassword(false);
        }
    }, [open, form]);

    const onSubmit = (values: FormValues) => {
        console.log(values);
        onSuccess();
    };


    return (
        <DialogContent className="max-w-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <DialogTitle className="text-xl font-medium">Add new sender email</DialogTitle>
            <DialogDescription className="text-base font-normal text-black my-2">Connect your custom account (Configure IMAP + SMTP)</DialogDescription>

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

            <section>
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
                            name="smtpUsername"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>SMTP Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter SMTP username" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="smtpPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>SMTP Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                type={showSmtpPassword ? "text" : "password"}
                                                placeholder="Enter SMTP password"
                                                {...field}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="absolute right-0 top-0 h-full px-3"
                                                onClick={() => setShowSmtpPassword(!showSmtpPassword)}
                                            >
                                                {showSmtpPassword ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                                            </Button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="smtpHost"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>SMTP Host</FormLabel>
                                        <FormControl>
                                            <Input placeholder="server.smtp.mail.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="smtpPort"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>SMTP Port</FormLabel>
                                        <FormControl>
                                            <Input placeholder="587" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="imapUsername"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>IMAP Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter IMAP username" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="imapPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>IMAP Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                type={showImapPassword ? "text" : "password"}
                                                placeholder="Enter IMAP password"
                                                {...field}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="absolute right-0 top-0 h-full px-3"
                                                onClick={() => setShowImapPassword(!showImapPassword)}
                                            >
                                                {showImapPassword ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                                            </Button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="imapHost"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>IMAP Host</FormLabel>
                                        <FormControl>
                                            <Input placeholder="server.imap.mail.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="imapPort"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>IMAP Port</FormLabel>
                                        <FormControl>
                                            <Input placeholder="587" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

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
            </section>
        </DialogContent>
    )
}

export default ImapModal


