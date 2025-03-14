"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
import { Delete, DeleteIcon, Edit, LucideDelete, Trash2 } from "lucide-react";

export default function DishesCategory() {
  const [categories, setCategories] = useState<FoodCategoryType[]>();
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [deleteCategoryName, setDeleteCategoryName] = useState();
  const [putCategoryName, setPutCategoryName] = useState<string>();

  const [selectedCategory, setSelectedCategory] = useState<FoodCategoryType>({
    _id: "",
    categoryName: "",
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

  const deleteCategory = async (_id: string) => {
    const data = await fetch(`http://localhost:4000/food-category/${_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ categoryName: deleteCategoryName }),
    });
    getCategories();
  };

  const putCategory = async (_id: string) => {
    const data = await fetch(`http://localhost:4000/food-category/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ categoryName: putCategoryName }),
    });
    getCategories();
    editHnadleClick();
    setPutCategoryName("");
  };

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   console.log(values);
  //   createCategory();
  //   alert(" zuv ajillaa");
  // }

  const handleClick = () => {
    setIsActive(!isActive);
  };
  const editHnadleClick = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="bg-[white] w-[100%] h-[15%] rounded-[20px] mt-[50px] p-[20px] flex flex-col gap-5">
      <p className="text-[20px] font-bold">Dishes category</p>
      <div className="flex gap-2 flex-wrap">
        <Dialog open={isEdit} onOpenChange={editHnadleClick}>
          {categories?.map((category: FoodCategoryType, index) => {
            return (
              <>
                <ContextMenu>
                  <ContextMenuTrigger>
                    <div
                      key={index}
                      className="border rounded-[20px] w-[80px] flex justify-center items"
                    >
                      {category.categoryName}
                    </div>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem>
                      <DialogTrigger
                        onClick={() => {
                          editHnadleClick(),
                            setSelectedCategory(category),
                            setPutCategoryName(category.categoryName);
                        }}
                        className="flex gap-2"
                      >
                        <Edit />
                        <p>Edit </p>1
                      </DialogTrigger>
                    </ContextMenuItem>
                    <ContextMenuItem
                      className="gap-2"
                      onClick={(e) => deleteCategory(category._id)}
                    >
                      <Trash2 />
                      <p>Delete</p>
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </>
            );
          })}
          <DialogContent>
            <DialogTitle>Edit name category</DialogTitle>
            <p>Edit category name</p>
            <Input
              value={putCategoryName}
              onChange={(e) => setPutCategoryName(e.target.value)}
            />
            <Button
              type="submit"
              onClick={(e) => putCategory(selectedCategory._id)}
            >
              Edit category
            </Button>
          </DialogContent>
        </Dialog>
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
      </div>
    </div>
  );
}
