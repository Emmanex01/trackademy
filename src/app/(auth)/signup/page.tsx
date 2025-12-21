"use client";

import { useRouter } from "next/navigation";
import { startTransition, useActionState, useEffect } from "react"; // Import useEffect
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signup } from "../../actions/auth";
import { SignupFormSchema, SignupFormValues } from "@/lib/definitions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "react-toastify";

const initialState = {
  message: "",
  errors: {},
};

export default function SignUp() {
  const router = useRouter();
  // useActionState (formerly useFormState) handles the result of the server action
  const [state, action, pending] = useActionState(signup, initialState);

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      usertype: "student",
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
  if (state?.errors) {
    Object.entries(state.errors).forEach(([field, message]) => {
      // Cast to any key of your form
      form.setError(field as any, {
        type: "server",
        message: Array.isArray(message)
          ? message.join(", ")
          : (message as string),
      });
    });
  }

  // 2. Handle Success
  // Assuming your server action returns { success: true } or similar
  if (state?.success) {
    toast.success("Account created!"); // Optional
    router.push("/dashboard"); // Redirect user
  }
}, [state, form]);


  // 2. The Logic to Submit
  const onSubmit = (data: SignupFormValues) => {
    // Because RHF manages state via JSON, but Server Actions (via useActionState) 
    // expect FormData, we must convert it manually.
    const formData = new FormData();
    
    Object.entries(data).forEach(([key, value]) => {
    // Only append if value is valid (skip null/undefined)
    if (value !== undefined && value !== null) {
      formData.append(key, value as string); 
    }
  });

    // Manually trigger the server action
    // 3. Wrap the server action call in startTransition
    // This tells React to track the pending state of this async operation
    startTransition(() => {
      action(formData);
    });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header Image Placeholder */}
      <div className="mx-auto h-40 w-full max-w-lg bg-black mb-8 rounded-md" />
      
      <h1 className="text-center text-4xl font-semibold">Join EduFlow</h1>

      <Form {...form}>
        {/* 3. Remove action={action}. Use only onSubmit={form.handleSubmit(onSubmit)} */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-6">

          {/* ... All your FormFields remain exactly the same ... */}
          
          <FormField
            control={form.control}
            name="usertype"
            render={({ field }) => (
              <FormItem>
                <FormLabel>I am a</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue aria-placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="teacher">Teacher</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="+234 XX XXXX XXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button type="submit" disabled={pending} className="w-full">
            {pending ? "Signing up…" : "Sign Up"}
          </Button>
          
          {/* Optional: Show global error message */}
          {state?.message && !state?.errors && (
             <p className="text-red-500 text-center">{state.message}</p>
          )}

        </form>
      </Form>
    </div>
  );
}