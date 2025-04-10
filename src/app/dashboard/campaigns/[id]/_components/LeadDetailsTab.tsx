import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CirclePlus } from "lucide-react"
import { useState } from "react"

// 🧠 Zod schema
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().min(1, { message: "Last name is required" }),
  company_name: z.string().optional(),
  pause_until: z.string().optional(),
  variable_name: z.string().optional(),
  variable_value: z.string().optional(),
  variable_type: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function LeadDetailsTab() {
  const [isAddVariable, setIsAddVariable] = useState<boolean>(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      first_name: "",
      last_name: "",
      company_name: "",
      pause_until: "",
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log("Validated data:", data)
    // API call or logic here
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-full">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-800">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* First Name */}
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-800">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-800">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company Name */}
          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-800">Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Company XYZ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Pause Until */}
          <FormField
            control={form.control}
            name="pause_until"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-800">Pause Until</FormLabel>
                <FormControl>
                  <Input placeholder="Enter value"  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {!isAddVariable &&
            <div
              className="flex items-center justify-center !mt-8 cursor-pointer"
              onClick={() => setIsAddVariable(true)}
            >
              <div className="flex items-center gap-2">
                <CirclePlus className="h-5 w-5 text-[#2184C6]" /> <span className="text-[14px] text-[#2184C6]">Add Variable</span>
              </div>
            </div>}

          {isAddVariable &&
            <div className="p-3 border border-input rounded-lg space-y-3 !mt-8">
              {/* Variable Name */}
              <FormField
                control={form.control}
                name="variable_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-800">First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Example: mobile_number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Variable Value */}
              <FormField
                control={form.control}
                name="variable_value"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-800">Variable Value</FormLabel>
                    <FormControl>
                      <Input placeholder="Example: 123-456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Variable Type */}
              <FormField
                control={form.control}
                name="variable_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-800">Variable Type</FormLabel>
                    <FormControl>
                      <Input placeholder="Example: string" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center items-center">
                <div
                  className="bg-red-500 py-1 px-4 text-white rounded-md cursor-pointer text-[14px]"
                  onClick={() => setIsAddVariable(false)}
                >Remove</div>
              </div>
            </div>}

          <div className="flex justify-end !mt-8">
            <Button type="submit" variant="primary">Save</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
