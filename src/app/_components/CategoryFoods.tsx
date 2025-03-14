"use client";
import { Divide } from "lucide-react";
import { AddNewDish } from "./AddNewDish";
import { FoodCategoryType, FoodType } from "../_util/type";
import { useEffect, useState } from "react";

const CategoryFoods = ({ category }: { category: FoodCategoryType }) => {
  const [foods, setFoods] = useState<FoodType[]>([]);

  const getFoods = async () => {
    const data = await fetch("http://localHost:4000/food");
    const jsonData = await data.json();
    setFoods(jsonData.data);
    console.log(jsonData);
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-4">
        <h2>{category.categoryName}</h2>
        <AddNewDish name={category.categoryName} />
      </div>
      <div className="flex felx-col gap-4 pt-10">
        {foods?.map((food: FoodType, index: number) => {
          return (
            <div
              key={index}
              className="w-[250px] h-[250px] rounded-[20px] border-[gray] border flex flex-col justify-center items-center gap-5"
            >
              <div className="w-[200px] h-[200px] bg-[#EF4444] pt-[20px] text-white flex justify-center items-center"></div>
              <div className="flex gap-3">
                <p>{food.foodName}</p>
                <p>{food.price}</p>
              </div>
              <p>{food.ingredietnts}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryFoods;
