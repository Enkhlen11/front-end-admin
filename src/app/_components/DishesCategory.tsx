"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FoodCategoryType } from "../_util/type";

const formSchema = z.object({
  categoryname: z.string().min(2, {
    message: "Category name must be at least 2 characters.",
  }),
});

export default function DishesCategory() {
  const [categories, setCategories] = useState<FoodCategoryType[]>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryname: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    alert(" zuv ajillaa");
  }

  const getCategories = async () => {
    const data = await fetch("http://localhost:4000/food-category");
    const jsonData = await data.json();
    setCategories(jsonData.data);
    console.log(jsonData);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="bg-[white] w-[90%] h-[15%] rounded-[20px] mt-[50px] p-[20px] flex flex-col gap-5">
      <p className="text-[20px] font-bold">Dishes category</p>
      <Dialog>
        <DialogTrigger>
          <div>
            {categories?.map((category: FoodCategoryType) => {
              return <div>{category.categoryName}</div>;
            })}
          </div>

          <div className="w-[46px] h-[46px] bg-[#EF4444] rounded-full text-white flex justify-center items-center">
            +
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add new category name </DialogTitle>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="categoryname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category name</FormLabel>
                      <FormControl>
                        <Input placeholder="Type category name..." {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
              <div className="flex justify-end">
                <Button type="submit">Add category</Button>
              </div>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
