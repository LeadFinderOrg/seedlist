import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Info, User } from "lucide-react";


export default function SenderName() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <>
            <div className="bg-gray-50 rounded-xl mb-6 mt-4">
                <div className="p-4">
                    <h3 className="text-slate-800 font-medium pb-1 border-b border-gray-300">
                        Sender Name
                    </h3>
                    <section className="my-4 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">First Name</label>
                            <div className="relative flex items-center mt-1 bg-white">
                                <User size={18} color="#1e293b" className="absolute left-3" />
                                <Input
                                    type="text"
                                    placeholder="Enter first name"
                                    className="pl-10"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Last Name</label>
                            <div className="relative flex items-center mt-1 bg-white">
                                <User size={18} color="#1e293b" className="absolute left-3" />
                                <Input
                                    type="text"
                                    placeholder="Enter last name"
                                    className="pl-10"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                    </section>

                    <h3 className="text-slate-800 font-medium pb-1 border-b border-gray-300">
                        Signature
                    </h3>
                    <section className="flex flex-wrap gap-6 my-4"></section>

                    <h3 className="text-slate-800 font-medium pb-1 border-b border-gray-300 flex items-center gap-2">
                        Tags <Info size={18} color="#475569" strokeWidth={1} />
                    </h3>
                    <section className="flex flex-wrap gap-6 my-4">
                        <Select>
                            <SelectTrigger className="w-full border border-gray-200 rounded px-3 py-2 text-sm bg-white text-slate-800 flex justify-between items-center">
                                <SelectValue placeholder="Tags" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="tag1">Tag 1</SelectItem>
                                <SelectItem value="tag2">Tag 2</SelectItem>
                                <SelectItem value="tag3">Tag 3</SelectItem>
                            </SelectContent>
                        </Select>
                    </section>
                </div>
            </div>
        </>
    )
}
