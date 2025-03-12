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

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const formSchema = z.object({
  categoryname: z.string().min(2, {
    message: "Category name must be at least 2 characters.",
  }),
});

export default function DishesCategory() {
  const [categories, setCategories] = useState<FoodCategoryType[]>();
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [isActive, setIsActive] = useState(false);
// const[]
  // const [open, setOpen] = useState();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryname: "",
    },
  });

  const getCategories = async () => {
    const data = await fetch("http://localhost:4000/food-category");
    const jsonData = await data.json();
    setCategories(jsonData.data);
    console.log(jsonData);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const createCategory = async () => {
    // console.log("createCategory duudagdlaa");
    const data = await fetch("http://localhost:4000/food-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: newCategoryName }),
    });
    handleClick();
    getCategories();
  };

  // const deleteCategory = async () => {
  //   const data = await fetch("http://localhost:4000", {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //     body:JSON.sringify({categoryName:})
  //   });
  // };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    createCategory();
    alert(" zuv ajillaa");
  }

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="bg-[white] w-[90%] h-[15%] rounded-[20px] mt-[50px] p-[20px] flex flex-col gap-5">
      <p className="text-[20px] font-bold">Dishes category</p>
      <div className="flex gap-2">
        <ContextMenu>
          <ContextMenuTrigger className="flex flex-wrap gap-2 ">
            {categories?.map((category: FoodCategoryType) => {
              return (
                <div className="border rounded-[20px] w-[80px] flex justify-center items">
                  {category.categoryName}
                </div>
              );
            })}

            <Dialog open={isActive} onOpenChange={handleClick}>
              <DialogTrigger onClick={handleClick}>
                <div className="w-[46px] h-[46px] bg-[#EF4444] rounded-full text-white flex justify-center items-center">
                  +
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Add new category</DialogTitle>
                <p>Category name</p>
                <Input
                  placeholder="Type category name..."
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                />
                <Button type="submit" onClick={createCategory}>
                  Add category
                </Button>
              </DialogContent>
            </Dialog>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </div>
  );
}
