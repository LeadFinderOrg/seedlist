import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Info, User } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./SettingsTab";

interface senderNameProps {
    form: UseFormReturn<FormValues>;
}

const SenderName: React.FC<senderNameProps> = ({
    form
}) => {

    return (
        <>
            <div className="bg-gray-50 rounded-xl mb-6 mt-4">
                <div className="p-4">
                    <h3 className="text-slate-800 font-medium pb-1 border-b border-gray-300">
                        Sender Name
                    </h3>
                    <section className="my-4 grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="senderName.firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-sm font-medium">First Name</FormLabel>
                                    <FormControl>
                                        <div className="relative flex items-center mt-1 bg-white">
                                            <User size={18} className="absolute left-3 text-slate-800" />
                                            <Input
                                                type="text"
                                                placeholder="Enter first name"
                                                className="pl-10"
                                                {...field}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="senderName.lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-sm font-medium">Last Name</FormLabel>
                                    <FormControl>
                                        <div className="relative flex items-center mt-1 bg-white">
                                            <User size={18} className="absolute left-3 text-slate-800" />
                                            <Input
                                                type="text"
                                                placeholder="Enter last name"
                                                className="pl-10"
                                                {...field}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </section>

                    <h3 className="text-slate-800 font-medium pb-1 border-b border-gray-300">
                        Signature
                    </h3>
                    <section className="flex flex-wrap gap-6 my-4"></section>

                    <h3 className="text-slate-800 font-medium pb-1 border-b border-gray-300 flex items-center gap-2">
                        Tags <Info size={18} className="text-slate-600" strokeWidth={1} />
                    </h3>
                    <section className="flex flex-wrap gap-6 my-4">
                        <FormField
                            control={form.control}
                            name="senderName.tags"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className="w-full border border-gray-200 rounded px-3 py-2 text-sm bg-white text-slate-800 flex justify-between items-center">
                                                <SelectValue placeholder="Tags" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="tag1">Tag 1</SelectItem>
                                                <SelectItem value="tag2">Tag 2</SelectItem>
                                                <SelectItem value="tag3">Tag 3</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </section>
                </div>
            </div>
        </>
    );
};
export default SenderName;