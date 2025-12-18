"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Lock, Mail } from "lucide-react"; // Using Lucide icons instead of boxicons
import { LoginFormSchema, LoginFormValues } from "@/lib/definitions";

import { login } from "@/app/actions/auth";
import { FormState } from "@/lib/definitions";

// UI Components
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label"; // Helper for the checkbox label

const initialState: FormState = { errors: {} };

const Login = () => {
  const router = useRouter();
  const [state, action, pending] = useActionState(login, initialState);

  // 2. Initialize React Hook Form
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      usertype: "student",
      email: "",
      password: "",
    },
  });

  // 3. Sync Server Errors to Form
  useEffect(() => {
    if (state?.errors) {
      Object.entries(state.errors).forEach(([field, message]) => {
        form.setError(field as keyof LoginFormValues, {
          type: "server",
          message: Array.isArray(message) ? message[0] : (message as string),
        });
      });
    }

    if (state?.success) {
      router.push("/dashboard");
    }
  }, [state, form, router]);

  // 4. Handle Submission
  const onSubmit = (data: LoginFormValues) => {
    const formData = new FormData();
    formData.append("usertype", data.usertype);
    formData.append("email", data.email);
    formData.append("password", data.password);
    
    // Trigger Server Action
    action(formData);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header Image Placeholder */}
      <div className="mx-auto h-40 w-full max-w-lg bg-black mb-8 rounded-md" />

      <div className="max-w-lg mx-auto">
        <h1 className="text-center text-4xl font-semibold tracking-tight">
          Welcome to EduFlow
        </h1>
        <p className="text-center text-muted-foreground my-2">
          Sign in to continue your learning Journey
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-8">
            
            {/* User Type Select */}
            <FormField
              control={form.control}
              name="usertype"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>I am a</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue aria-placeholder="Select user type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="teacher">Teacher</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Input */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email/Phone</FormLabel>
                  <FormControl>
                    <div className="relative">
                       {/* Optional: Add icon inside input */}
                      <Input placeholder="name@example.com" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Input */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="font-normal cursor-pointer">
                  Remember me
                </Label>
              </div>
              <a href="#" className="text-primary hover:underline font-medium">
                Forgot Password?
              </a>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <Button type="submit" className="w-full" disabled={pending}>
                {pending ? "Signing in..." : "Sign in"}
              </Button>

              <Button variant="outline" type="button" className="w-full gap-2">
                <Lock className="w-4 h-4" />
                <span>Login with Google</span>
              </Button>
            </div>

            {/* Footer */}
            <div className="flex justify-center gap-2 text-sm mt-6">
              <p className="text-muted-foreground">Don't have an account?</p>
              <a href="/signup" className="font-semibold text-primary hover:underline">
                Sign up here
              </a>
            </div>
            
            {/* Global Error Message */}
            {state?.message && !state?.errors && (
                <p className="text-red-500 text-center text-sm">{state.message}</p>
            )}

          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;