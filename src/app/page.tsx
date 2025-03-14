"use client";
import Image from "next/image";
import { AddNewDish } from "./_components/AddNewDish";
import DishesCategory from "./_components/DishesCategory";
import CategoryFoods from "./_components/CategoryFoods";
import { useEffect, useState } from "react";
import { FoodCategoryType } from "./_util/type";

export default function Home() {
  const [categories, setCategories] = useState<FoodCategoryType[]>();

  const getCategories = async () => {
    const data = await fetch("http://localhost:4000/food-category");
    const jsonData = await data.json();
    setCategories(jsonData.data);
    // console.log(jsonData);
    getCategories();
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="w-[100%] bg-[#dfdfdf] flex flex-col gap-10 px-[60px]">
      <DishesCategory />
      <div className="flex flex-col gap-4 items-start">
        {categories?.map((category, index) => {
          return (
            <div key={index}>
              <CategoryFoods category={category} />

            </div>
          );
        })}
      </div>
    </div>
  );
}
