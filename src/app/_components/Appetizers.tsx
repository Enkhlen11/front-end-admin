"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  foodname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodname: "",
    },
  });
}

function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
}

export function Appetizers() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodname: "",
    },
  });
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-[250px] h-[250px] rounded-[20px] border-[#EF4444] border border-dashed flex flex-col justify-center items-center gap-5">
          <div className="w-[46px] h-[46px] bg-[#EF4444] rounded-full text-white flex justify-center items-center">
            +
          </div>
          Add new Dish to Appetizers
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new Dish to Appetizers</DialogTitle>

          <div className="flex gap-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="foodname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Food name</FormLabel>
                      <FormControl>
                        <Input
                          className="w-[220px]"
                          placeholder="Type food name"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="foodname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Food price</FormLabel>
                      <FormControl>
                        <Input
                          className="w-[220px]"
                          placeholder="Enter price..."
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="foodname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ingredients</FormLabel>
                    <FormControl>
                      <Textarea placeholder="List ingredients..." />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="foodname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food image</FormLabel>
                    <FormControl>
                      <Textarea placeholder="end zuragb oruuldag bolgomoor bnaaa" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <div className="flex justify-end">
            <Button className="w-[100px]" type="submit">
              Add dish
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
