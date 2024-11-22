"use client";
import React from "react";
import { CardWrapper } from "./CardWrapper";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError, FormSuccess } from "../formError";
import { register } from "@/actions/register";
// import { FormError, FormSuccess } from "../formError";

export const RegisterForm = () => {
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [isPending, startTransition] = React.useTransition();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      register(data).then((res) => {
        setError(
          res.error instanceof Error ? res.error.message : res.error ?? ""
        );
        setSuccess(res.success ?? "");
      });
    });
  };
  return (
    <CardWrapper
      headerLabel="Register"
      backLabel="Aleady have an account? Sign In"
      backhref="/auth/login"
      showIcon
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label>Email</Label>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="example@gmail.com"
                      type="email"
                    />
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
                  <Label>Password</Label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="******"
                      type="password"
                      disabled={isPending}
                    />
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
                  <Label>Username</Label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john doe"
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>

                  <FormMessage />
                  <FormError message={error} />
                  <FormSuccess message={success} />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            Register{" "}
          </Button>
          {/* <FormError message="Something went Wrong" />
          <FormSuccess message="Login Successful" /> */}
        </form>
      </Form>
    </CardWrapper>
  );
};
